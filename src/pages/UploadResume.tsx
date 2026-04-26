import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import apiService from '../services/api';

const UploadResume: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    phoneNumber: '',
    workAuthorization: '',
    ageConfirmation: '',
    areasOfInterest: '',
    agreeToShare: false,
  });

  const [resumeFile, setResumeFile]   = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted]     = useState(false);
  const [error, setError]             = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!resumeFile) {
      setError('Please upload a resume file.');
      return;
    }
    if (!formData.areasOfInterest) {
      setError('Please select an area of interest.');
      return;
    }

    setIsSubmitting(true);

    const fd = new FormData();
    fd.append('firstName',  formData.firstName);
    fd.append('lastName',   formData.lastName);
    fd.append('email',      formData.email);
    fd.append('phone',      formData.phoneNumber);
    fd.append('position',   formData.areasOfInterest);
    fd.append('resume',     resumeFile);

    const result = await apiService.uploadResume(fd);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.message || 'Submission failed. Please try again.');
    }
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header isTransparent={true} />
        <div className="pt-32 pb-20 px-6 flex items-center justify-center">
          <div className="max-w-md text-center bg-white rounded-lg shadow-lg p-10">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
            <p className="text-gray-600">Thank you! We will review your resume and get back to you soon.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isTransparent={true} />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Join Our Talent Network</h1>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Upload Resume */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume *</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">{resumeFile ? resumeFile.name : 'No file chosen'}</p>
                  <p className="text-sm text-gray-500 mt-2">Click to upload (PDF, DOC, DOCX — max 5 MB)</p>
                </label>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Info</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                  <input type="text" name="state" value={formData.state} onChange={handleInputChange} required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Information</h3>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you legally authorized to work for any employer? *
                </label>
                <div className="space-y-2">
                  {['Yes', 'No'].map(v => (
                    <label key={v} className="flex items-center">
                      <input type="radio" name="workAuthorization" value={v} onChange={handleInputChange} required className="mr-2" />
                      {v}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Are you at least 18 years old? *</label>
                <div className="space-y-2">
                  {['Yes', 'No'].map(v => (
                    <label key={v} className="flex items-center">
                      <input type="radio" name="ageConfirmation" value={v} onChange={handleInputChange} required className="mr-2" />
                      {v}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest *</label>
                <select name="areasOfInterest" value={formData.areasOfInterest} onChange={handleInputChange} required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select an area</option>
                  {['Engineering','Construction','Project Management','Business Development','Operations','Safety','Quality Control','Administration'].map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Agreement */}
            <div className="border-t pt-6">
              <label className="flex items-start space-x-3">
                <input type="checkbox" name="agreeToShare" checked={formData.agreeToShare} onChange={handleInputChange} required className="mt-1" />
                <span className="text-sm text-gray-700">
                  I agree to share my profile with recruiters and receive occasional emails about new career opportunities. I agree to the Privacy Policy.
                </span>
              </label>
            </div>

            <div className="pt-6">
              <button type="submit" disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold disabled:opacity-60 disabled:cursor-not-allowed">
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UploadResume;
