-- JKC Construction - MySQL Database Schema
-- Run this file against your MySQL server to set up all tables
-- Usage: mysql -u root -p < database/schema.sql

CREATE DATABASE IF NOT EXISTS jkc_construction
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE jkc_construction;

-- ─────────────────────────────────────────────────────────────────────────────
-- Admin users
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS admin_users (
  id           INT            AUTO_INCREMENT PRIMARY KEY,
  name         VARCHAR(100)   NOT NULL,
  email        VARCHAR(255)   NOT NULL UNIQUE,
  password_hash VARCHAR(255)  NOT NULL,
  role         ENUM('super_admin','admin') NOT NULL DEFAULT 'admin',
  is_active    BOOLEAN        NOT NULL DEFAULT TRUE,
  created_at   TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ─────────────────────────────────────────────────────────────────────────────
-- Contact form submissions
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_submissions (
  id           INT            AUTO_INCREMENT PRIMARY KEY,
  first_name   VARCHAR(50)    NOT NULL,
  last_name    VARCHAR(50)    NOT NULL,
  email        VARCHAR(255)   NOT NULL,
  phone        VARCHAR(25)    DEFAULT NULL,
  inquiry_type ENUM('general','careers','services','partnership','other') NOT NULL,
  message      TEXT           NOT NULL,
  ip_address   VARCHAR(45)    DEFAULT NULL,
  status       ENUM('new','read','replied','archived') NOT NULL DEFAULT 'new',
  created_at   TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE INDEX idx_contact_email  ON contact_submissions(email);
CREATE INDEX idx_contact_status ON contact_submissions(status);
CREATE INDEX idx_contact_date   ON contact_submissions(created_at);

-- ─────────────────────────────────────────────────────────────────────────────
-- Talent network registrations
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS talent_network (
  id           INT            AUTO_INCREMENT PRIMARY KEY,
  first_name   VARCHAR(50)    NOT NULL,
  last_name    VARCHAR(50)    NOT NULL,
  email        VARCHAR(255)   NOT NULL,
  phone        VARCHAR(25)    NOT NULL,
  location     VARCHAR(100)   NOT NULL,
  job_category ENUM('construction','engineering','management','safety','operations','other') NOT NULL,
  experience   ENUM('entry','1-3','3-5','5-10','10+') NOT NULL,
  availability ENUM('immediate','2-weeks','1-month','3-months') NOT NULL,
  ip_address   VARCHAR(45)    DEFAULT NULL,
  status       ENUM('active','contacted','hired','inactive') NOT NULL DEFAULT 'active',
  created_at   TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE INDEX idx_talent_email    ON talent_network(email);
CREATE INDEX idx_talent_category ON talent_network(job_category);
CREATE INDEX idx_talent_status   ON talent_network(status);

-- ─────────────────────────────────────────────────────────────────────────────
-- Resume uploads
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS resume_uploads (
  id            INT            AUTO_INCREMENT PRIMARY KEY,
  first_name    VARCHAR(50)    NOT NULL,
  last_name     VARCHAR(50)    NOT NULL,
  email         VARCHAR(255)   NOT NULL,
  phone         VARCHAR(25)    NOT NULL,
  position      VARCHAR(100)   NOT NULL,
  file_name     VARCHAR(255)   NOT NULL,
  original_name VARCHAR(255)   NOT NULL,
  file_size     INT UNSIGNED   NOT NULL,
  file_type     VARCHAR(50)    NOT NULL,
  ip_address    VARCHAR(45)    DEFAULT NULL,
  status        ENUM('new','reviewed','shortlisted','rejected') NOT NULL DEFAULT 'new',
  created_at    TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE INDEX idx_resume_email  ON resume_uploads(email);
CREATE INDEX idx_resume_status ON resume_uploads(status);

-- ─────────────────────────────────────────────────────────────────────────────
-- Job listings
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS jobs (
  id                  INT            AUTO_INCREMENT PRIMARY KEY,
  title               VARCHAR(200)   NOT NULL,
  department          VARCHAR(100)   NOT NULL,
  location            VARCHAR(100)   NOT NULL,
  type                ENUM('Full-time','Part-time','Contract','Internship') NOT NULL DEFAULT 'Full-time',
  experience_required VARCHAR(50)    NOT NULL,
  salary_range        VARCHAR(100)   DEFAULT NULL,
  description         TEXT           NOT NULL,
  is_active           BOOLEAN        NOT NULL DEFAULT TRUE,
  posted_at           DATE           NOT NULL DEFAULT (CURRENT_DATE),
  created_at          TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at          TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- One-to-many detail tables for jobs
CREATE TABLE IF NOT EXISTS job_requirements (
  id          INT            AUTO_INCREMENT PRIMARY KEY,
  job_id      INT            NOT NULL,
  requirement VARCHAR(500)   NOT NULL,
  sort_order  TINYINT UNSIGNED NOT NULL DEFAULT 0,
  CONSTRAINT fk_req_job FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS job_responsibilities (
  id              INT            AUTO_INCREMENT PRIMARY KEY,
  job_id          INT            NOT NULL,
  responsibility  VARCHAR(500)   NOT NULL,
  sort_order      TINYINT UNSIGNED NOT NULL DEFAULT 0,
  CONSTRAINT fk_resp_job FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS job_benefits (
  id         INT            AUTO_INCREMENT PRIMARY KEY,
  job_id     INT            NOT NULL,
  benefit    VARCHAR(500)   NOT NULL,
  sort_order TINYINT UNSIGNED NOT NULL DEFAULT 0,
  CONSTRAINT fk_ben_job FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ─────────────────────────────────────────────────────────────────────────────
-- Clients  (admin-managed)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS clients (
  id         INT            AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(100)   NOT NULL,
  email      VARCHAR(255)   NOT NULL,
  phone      VARCHAR(25)    NOT NULL,
  company    VARCHAR(200)   NOT NULL,
  project    VARCHAR(200)   NOT NULL,
  status     ENUM('Active','Pending','Completed') NOT NULL DEFAULT 'Pending',
  created_at TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ─────────────────────────────────────────────────────────────────────────────
-- Projects  (admin-managed)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS projects (
  id          INT            AUTO_INCREMENT PRIMARY KEY,
  title       VARCHAR(200)   NOT NULL,
  client      VARCHAR(200)   NOT NULL,
  status      ENUM('Planning','In Progress','Completed','On Hold') NOT NULL DEFAULT 'Planning',
  start_date  DATE           NOT NULL,
  end_date    DATE           NOT NULL,
  budget      VARCHAR(100)   NOT NULL,
  description TEXT           NOT NULL,
  created_at  TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ─────────────────────────────────────────────────────────────────────────────
-- Seed data
-- ─────────────────────────────────────────────────────────────────────────────

-- Default super-admin  (password: Admin@JKC2025  –  change after first login)
-- Hash generated with bcrypt rounds=12
INSERT INTO admin_users (name, email, password_hash, role) VALUES
('JKC Admin', 'admin@jkconstruction.com',
 '$2a$12$ylWn3o3KSs4Qj3kuotpmVektT2kbl8vU6ba6anQKWEoLYQ3/fLiXS', 'super_admin');

-- Sample jobs
INSERT INTO jobs (title, department, location, type, experience_required, salary_range, description, posted_at) VALUES
('Construction Project Manager', 'Construction', 'Surat, Gujarat', 'Full-time', '5+ years',
 '₹8,00,000 - ₹12,00,000 per annum',
 'Lead construction projects from planning to completion. Manage teams, budgets, and timelines while ensuring quality and safety standards.',
 '2025-01-01'),
('Site Engineer', 'Engineering', 'Multiple Locations', 'Full-time', '2-5 years',
 '₹4,00,000 - ₹7,00,000 per annum',
 'Oversee on-site construction activities and ensure quality standards are met throughout the project lifecycle.',
 '2025-01-02'),
('Safety Coordinator', 'Safety', 'Surat, Gujarat', 'Full-time', '3+ years',
 '₹3,50,000 - ₹6,00,000 per annum',
 'Implement and monitor safety protocols on construction sites. Ensure compliance with all safety regulations.',
 '2025-01-03');

-- Job requirements
INSERT INTO job_requirements (job_id, requirement, sort_order) VALUES
(1, 'Bachelor''s degree in Construction Management or related field', 1),
(1, '5+ years of project management experience',                       2),
(1, 'PMP certification preferred',                                     3),
(1, 'Strong leadership and communication skills',                      4),
(1, 'Knowledge of construction codes and regulations',                 5),
(2, 'Civil/Electrical/Electronic Engineering degree',                                        1),
(2, '2+ years site experience',                                        2),
(2, 'Knowledge of construction codes',                                 3),
(3, 'Safety certification (NEBOSH / IOSH preferred)',                  1),
(3, '3+ years safety experience on construction sites',                2),
(3, 'OSHA training',                                                   3);

-- Job responsibilities
INSERT INTO job_responsibilities (job_id, responsibility, sort_order) VALUES
(1, 'Plan and coordinate construction projects',          1),
(1, 'Manage project budgets and timelines',               2),
(1, 'Lead project teams and subcontractors',              3),
(1, 'Ensure compliance with safety regulations',          4),
(1, 'Communicate with clients and stakeholders',          5),
(2, 'Supervise on-site construction activities',          1),
(2, 'Prepare and review engineering drawings',            2),
(2, 'Conduct quality inspections',                        3),
(3, 'Conduct daily safety audits',                        1),
(3, 'Train workers on safety protocols',                  2),
(3, 'Investigate and report safety incidents',            3);

-- Job benefits
INSERT INTO job_benefits (job_id, benefit, sort_order) VALUES
(1, 'Competitive salary package',              1),
(1, 'Health insurance',                        2),
(1, 'Retirement benefits',                     3),
(1, 'Professional development opportunities',  4),
(1, 'Performance bonuses',                     5),
(2, 'Competitive salary',                      1),
(2, 'Travel allowance',                        2),
(2, 'Health insurance',                        3),
(3, 'Competitive salary',                      1),
(3, 'Safety gear provided',                    2),
(3, 'Health insurance',                        3);

-- Sample clients
INSERT INTO clients (name, email, phone, company, project, status) VALUES
('Rajesh Kumar',  'rajesh@example.com', '+91 98765 43210', 'Kumar Industries',   'Office Complex',    'Active'),
('Priya Sharma',  'priya@example.com',  '+91 87654 32109', 'Sharma Enterprises', 'Residential Tower', 'Pending');

-- Sample projects
INSERT INTO projects (title, client, status, start_date, end_date, budget, description) VALUES
('Metro Rail Extension',      'Government of Maharashtra',  'In Progress', '2025-01-01', '2025-12-31', '₹500 Crores', 'Extension of metro rail line from Andheri to Virar'),
('Smart City Infrastructure', 'Pune Municipal Corporation', 'Planning',    '2025-03-01', '2026-02-28', '₹300 Crores', 'Complete smart city infrastructure development');
