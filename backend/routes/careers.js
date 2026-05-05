import express from 'express';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import pool from '../db.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

const careerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 15,
  message: { success: false, message: 'Too many applications. Please try again later.' },
});

const createTransporter = () => {
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) return null;
  return nodemailer.createTransport({
    host:   process.env.EMAIL_HOST,
    port:   parseInt(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_PORT === '465',
    auth:   { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });
};

// ─── Human-readable label maps ─────────────────────────────────────────────
const EXPERIENCE_LABELS = {
  'entry':  'Entry Level (0–1 years)',
  '1-3':    '1–3 years',
  '3-5':    '3–5 years',
  '5-10':   '5–10 years',
  '10+':    '10+ years',
};

const AVAILABILITY_LABELS = {
  'immediate':  'Immediate',
  '2-weeks':    'Within 2 weeks',
  '1-month':    'Within 1 month',
  '3-months':   'Within 3 months',
};

const CATEGORY_LABELS = {
  'construction':  'Construction',
  'engineering':   'Engineering',
  'management':    'Management',
  'safety':        'Safety',
  'operations':    'Operations',
  'other':         'Other',
};

const talentValidation = [
  body('firstName').trim().isLength({ min: 2, max: 50 }).withMessage('First name must be 2–50 characters.'),
  body('lastName').trim().isLength({ min: 2, max: 50 }).withMessage('Last name must be 2–50 characters.'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email required.'),
  body('phone').optional({ checkFalsy: true }).isMobilePhone().withMessage('Valid phone number required.'),
  body('location').trim().isLength({ min: 2, max: 100 }).withMessage('Location must be 2–100 characters.'),
  body('jobCategory').isIn(['construction','engineering','management','safety','operations','other']).withMessage('Invalid job category.'),
  body('experience').isIn(['entry','1-3','3-5','5-10','10+']).withMessage('Invalid experience level.'),
  body('availability').isIn(['immediate','2-weeks','1-month','3-months']).withMessage('Invalid availability.'),
];

// ─── POST /api/careers/talent-network ─────────────────────────────────────
router.post('/talent-network', careerLimiter, talentValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: 'Validation failed.', errors: errors.array() });
  }

  const { firstName, lastName, email, phone, location, jobCategory, experience, availability } = req.body;
  const ip = req.ip || req.socket.remoteAddress;

  try {
    const [result] = await pool.query(
      `INSERT INTO talent_network
         (first_name, last_name, email, phone, location, job_category, experience, availability, ip_address)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [firstName, lastName, email, phone || '', location, jobCategory, experience, availability, ip]
    );

    const transporter = createTransporter();
    if (transporter) {
      const adminUrl          = process.env.ADMIN_URL || 'http://jaykrishnaconstruction.in/admin';
      const experienceLabel   = EXPERIENCE_LABELS[experience]   || experience;
      const availabilityLabel = AVAILABILITY_LABELS[availability] || availability;
      const categoryLabel     = CATEGORY_LABELS[jobCategory]    || jobCategory;

      transporter.sendMail({
        from:    process.env.EMAIL_FROM || process.env.EMAIL_USER,
        to:      process.env.EMAIL_TO   || 'jaykrishna.surat@gmail.com',
        subject: `New Talent Network Registration #${result.insertId} — ${categoryLabel} (${firstName} ${lastName})`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#059669;color:#fff;padding:20px;text-align:center">
              <h1 style="margin:0">🧑‍💼 New Talent Network Registration</h1>
            </div>
            <div style="padding:20px;background:#f0fdf4">
              <table style="width:100%;border-collapse:collapse">
                <tr>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5;font-weight:bold;width:35%">Submission ID:</td>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5">#${result.insertId}</td>
                </tr>
                <tr>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5;font-weight:bold">Full Name:</td>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5;font-weight:bold">Email:</td>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5">
                    <a href="mailto:${email}" style="color:#059669">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5;font-weight:bold">Phone:</td>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5">${phone}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5;font-weight:bold">Location:</td>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5">${location}</td>
                </tr>
                <tr>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5;font-weight:bold">Areas of Interest:</td>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5">${categoryLabel}</td>
                </tr>
                <tr>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5;font-weight:bold">Experience:</td>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5">${experienceLabel}</td>
                </tr>
                <tr>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5;font-weight:bold">Availability:</td>
                  <td style="padding:10px;border-bottom:1px solid #d1fae5">${availabilityLabel}</td>
                </tr>
                <tr>
                  <td style="padding:10px;font-weight:bold">Submitted:</td>
                  <td style="padding:10px">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td>
                </tr>
              </table>

              <div style="margin-top:16px;padding:12px;background:#dcfce7;border-radius:6px;font-size:13px;color:#047857">
                📎 A separate email will follow with the uploaded resume file.
              </div>

              <div style="margin-top:24px;text-align:center">
                <a href="${adminUrl}"
                   style="background:#059669;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;font-weight:bold;display:inline-block">
                  View in Admin Portal →
                </a>
              </div>

              <p style="margin-top:20px;font-size:12px;color:#6b7280;text-align:center">
                JKC Construction — Talent Network Notification
              </p>
            </div>
          </div>`,
      }).catch(mailErr => {
        console.warn('Talent network email failed (submission still saved):', mailErr.message);
      });
    }

    res.json({ success: true, message: 'Thank you for joining our talent network! We will contact you when suitable opportunities arise.' });
  } catch (err) {
    console.error('Talent network error:', err);
    res.status(500).json({ success: false, message: 'Registration failed. Please try again.' });
  }
});

// ─── GET /api/careers/jobs ─────────────────────────────────────────────────
router.get('/jobs', async (req, res) => {
  try {
    const [jobs] = await pool.query(
      `SELECT id, title, department, location, type, experience_required AS experience,
              salary_range, description, posted_at
       FROM jobs
       WHERE is_active = 1
       ORDER BY posted_at DESC`
    );
    res.json({ success: true, data: jobs });
  } catch (err) {
    console.error('Get jobs error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch jobs.' });
  }
});

// ─── GET /api/careers/jobs/:id ─────────────────────────────────────────────
router.get('/jobs/:id', async (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  if (isNaN(jobId)) return res.status(400).json({ success: false, message: 'Invalid job ID.' });

  try {
    const [[job]] = await pool.query(
      `SELECT id, title, department, location, type, experience_required AS experience,
              salary_range, description, posted_at
       FROM jobs WHERE id = ? AND is_active = 1`,
      [jobId]
    );

    if (!job) return res.status(404).json({ success: false, message: 'Job not found.' });

    const [[reqs], [resps], [bens]] = await Promise.all([
      pool.query('SELECT requirement FROM job_requirements WHERE job_id = ? ORDER BY sort_order', [jobId]),
      pool.query('SELECT responsibility FROM job_responsibilities WHERE job_id = ? ORDER BY sort_order', [jobId]),
      pool.query('SELECT benefit FROM job_benefits WHERE job_id = ? ORDER BY sort_order', [jobId]),
    ]);

    res.json({
      success: true,
      data: {
        ...job,
        requirements:     reqs.map(r => r.requirement),
        responsibilities: resps.map(r => r.responsibility),
        benefits:         bens.map(b => b.benefit),
      },
    });
  } catch (err) {
    console.error('Get job detail error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch job.' });
  }
});

// ─── Admin-only job management ─────────────────────────────────────────────

// POST /api/careers/jobs  (create)
router.post('/jobs', authMiddleware, async (req, res) => {
  const { title, department, location, type, experience_required, salary_range, description, requirements = [], responsibilities = [], benefits = [] } = req.body;
  if (!title || !department || !location || !experience_required || !description) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    const [result] = await conn.query(
      `INSERT INTO jobs (title, department, location, type, experience_required, salary_range, description)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [title, department, location, type || 'Full-time', experience_required, salary_range || null, description]
    );
    const jobId = result.insertId;

    if (requirements.length)     await conn.query('INSERT INTO job_requirements (job_id, requirement, sort_order) VALUES ?',     [requirements.map((r, i) => [jobId, r, i])]);
    if (responsibilities.length) await conn.query('INSERT INTO job_responsibilities (job_id, responsibility, sort_order) VALUES ?', [responsibilities.map((r, i) => [jobId, r, i])]);
    if (benefits.length)         await conn.query('INSERT INTO job_benefits (job_id, benefit, sort_order) VALUES ?',              [benefits.map((b, i) => [jobId, b, i])]);

    await conn.commit();
    res.status(201).json({ success: true, message: 'Job created.', data: { id: jobId } });
  } catch (err) {
    await conn.rollback();
    console.error('Create job error:', err);
    res.status(500).json({ success: false, message: 'Failed to create job.' });
  } finally {
    conn.release();
  }
});

// PUT /api/careers/jobs/:id  (update)
router.put('/jobs/:id', authMiddleware, async (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  const { title, department, location, type, experience_required, salary_range, description, is_active, requirements = [], responsibilities = [], benefits = [] } = req.body;

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    await conn.query(
      `UPDATE jobs SET title=?, department=?, location=?, type=?, experience_required=?,
                       salary_range=?, description=?, is_active=? WHERE id=?`,
      [title, department, location, type, experience_required, salary_range, description, is_active ?? 1, jobId]
    );

    await conn.query('DELETE FROM job_requirements     WHERE job_id = ?', [jobId]);
    await conn.query('DELETE FROM job_responsibilities WHERE job_id = ?', [jobId]);
    await conn.query('DELETE FROM job_benefits         WHERE job_id = ?', [jobId]);

    if (requirements.length)     await conn.query('INSERT INTO job_requirements (job_id, requirement, sort_order) VALUES ?',     [requirements.map((r, i) => [jobId, r, i])]);
    if (responsibilities.length) await conn.query('INSERT INTO job_responsibilities (job_id, responsibility, sort_order) VALUES ?', [responsibilities.map((r, i) => [jobId, r, i])]);
    if (benefits.length)         await conn.query('INSERT INTO job_benefits (job_id, benefit, sort_order) VALUES ?',              [benefits.map((b, i) => [jobId, b, i])]);

    await conn.commit();
    res.json({ success: true, message: 'Job updated.' });
  } catch (err) {
    await conn.rollback();
    console.error('Update job error:', err);
    res.status(500).json({ success: false, message: 'Failed to update job.' });
  } finally {
    conn.release();
  }
});

// DELETE /api/careers/jobs/:id
router.delete('/jobs/:id', authMiddleware, async (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  try {
    await pool.query('DELETE FROM jobs WHERE id = ?', [jobId]);
    res.json({ success: true, message: 'Job deleted.' });
  } catch (err) {
    console.error('Delete job error:', err);
    res.status(500).json({ success: false, message: 'Failed to delete job.' });
  }
});

export default router;