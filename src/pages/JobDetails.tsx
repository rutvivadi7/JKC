import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import apiService from '../services/api';

const JobDetails: React.FC = () => {
  const { jobId }   = useParams<{ jobId: string }>();
  const navigate    = useNavigate();

  const [job, setJob]         = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  useEffect(() => {
    const fetchJob = async () => {
      if (!jobId) { setError('Invalid job ID.'); setLoading(false); return; }
      const result = await apiService.getJobDetails(parseInt(jobId, 10));
      if (result.success && result.data) {
        setJob(result.data);
      } else {
        setError('Job not found.');
      }
      setLoading(false);
    };
    fetchJob();
  }, [jobId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center py-40">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <button onClick={() => navigate('/careers')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Browse All Jobs
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back */}
        <button onClick={() => navigate(-1)} className="flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Jobs
        </button>

        {/* Job Header */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1 pr-6">
              <h1 className="text-3xl font-bold text-blue-600 mb-4">{job.title}</h1>
              <div className="grid sm:grid-cols-2 gap-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span>{job.type} · {job.experience} experience</span>
                </div>
                {job.salary_range && (
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span>{job.salary_range}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <button
                onClick={() => navigate('/upload-resume')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
            </div>
          </div>

          {/* Share */}
          <div className="flex gap-3 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500 mr-2 self-center">Share:</span>
            {[
              { label: 'f', bg: 'bg-blue-600' },
              { label: 'X', bg: 'bg-black' },
              { label: 'in', bg: 'bg-blue-500' },
            ].map(({ label, bg }) => (
              <div key={label} className={`w-8 h-8 ${bg} rounded-full flex items-center justify-center`}>
                <span className="text-white text-sm font-bold">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">About this Role</h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        {/* Responsibilities */}
        {job.responsibilities?.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">What You'll Do</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((r: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span className="text-gray-700 leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Requirements */}
        {job.requirements?.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Requirements</h2>
            <ul className="space-y-3">
              {job.requirements.map((r: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-gray-700 leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        {job.benefits?.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Benefits</h2>
            <ul className="space-y-3">
              {job.benefits.map((b: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">★</span>
                  <span className="text-gray-700 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Apply CTA */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-gray-700 mb-4 font-medium">Ready to join our team?</p>
          <button
            onClick={() => navigate('/upload-resume')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg font-semibold transition-colors">
            Apply for This Position
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetails;
