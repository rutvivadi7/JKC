import React, { useState, useEffect } from 'react';
import {
  Users, Briefcase, Plus, Edit, Trash2,
  LogOut, X, Save, User, MessageSquare, UserCheck, FileText,
} from 'lucide-react';
import apiService from '../services/api';

declare global {
  interface ImportMeta {
    readonly env: Record<string, string>;
  }
}

interface ResumeUpload {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  position: string;
  file_name: string;
  original_name: string;
  file_size: number;
  file_type: string;
  status: 'new' | 'reviewed' | 'shortlisted' | 'rejected';
  created_at: string;
}

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  project: string;
  status: 'Active' | 'Pending' | 'Completed';
  created_at: string;
}

interface Project {
  id: number;
  title: string;
  client: string;
  status: 'Planning' | 'In Progress' | 'Completed' | 'On Hold';
  start_date: string;
  end_date: string;
  budget: string;
  description: string;
}

interface ContactSubmission {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  inquiry_type: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  created_at: string;
}

interface TalentSubmission {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  location: string;
  job_category: string;
  experience: string;
  availability: string;
  status: 'active' | 'contacted' | 'hired' | 'inactive';
  created_at: string;
}

type ClientForm  = Pick<Client,  'name' | 'email' | 'phone' | 'company' | 'project' | 'status'>;
type ProjectForm = Pick<Project, 'title' | 'client' | 'status' | 'start_date' | 'end_date' | 'budget' | 'description'>;

const BLANK_CLIENT:  ClientForm  = { name: '', email: '', phone: '', company: '', project: '', status: 'Pending' };
const BLANK_PROJECT: ProjectForm = { title: '', client: '', status: 'Planning', start_date: '', end_date: '', budget: '', description: '' };

const Admin: React.FC = () => {
  // ── Auth state ────────────────────────────────────────────────────────────
  const [isLoggedIn, setIsLoggedIn]             = useState(false);
  const [loggedInUser, setLoggedInUser]         = useState<{ name: string; email: string } | null>(null);
  const [emailInput, setEmailInput]             = useState('');
  const [passwordInput, setPasswordInput]       = useState('');
  const [showPasswordPage, setShowPasswordPage] = useState(false);
  const [showPassword, setShowPassword]         = useState(false);
  const [loginError, setLoginError]             = useState('');
  const [isTransitioning, setIsTransitioning]   = useState(false);

  // ── UI state ──────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab]                     = useState('contacts');
  const [showAddClientModal, setShowAddClientModal]   = useState(false);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [editingClient, setEditingClient]             = useState<Client | null>(null);
  const [editingProject, setEditingProject]           = useState<Project | null>(null);
  const [newClient, setNewClient]                     = useState<ClientForm>(BLANK_CLIENT);
  const [newProject, setNewProject]                   = useState<ProjectForm>(BLANK_PROJECT);

  // ── Data state ────────────────────────────────────────────────────────────
  const [clients, setClients]           = useState<Client[]>([]);
  const [projects, setProjects]         = useState<Project[]>([]);
  const [contacts, setContacts]         = useState<ContactSubmission[]>([]);
  const [talents, setTalents]           = useState<TalentSubmission[]>([]);
  const [resumes, setResumes]           = useState<ResumeUpload[]>([]);
  const [loadingData, setLoadingData]   = useState(false);
  const [expandedContact, setExpandedContact] = useState<number | null>(null);
  const [contactFilter, setContactFilter]     = useState<string>('all');

  // Restore session on mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const user  = localStorage.getItem('adminUser');
    if (token && user) {
      apiService.setToken(token);
      setLoggedInUser(JSON.parse(user));
      setIsLoggedIn(true);
    }
  }, []);

  // Fetch data once logged in
  useEffect(() => {
    if (!isLoggedIn) return;
    const load = async () => {
      setLoadingData(true);
      const [cr, pr, co, ta, re] = await Promise.all([
        apiService.getClients(),
        apiService.getProjects(),
        apiService.getContactSubmissions(),
        apiService.getTalentNetworkSubmissions(),
        apiService.getResumeUploads(),
      ]);
      if (cr.success) setClients((cr  as any).data ?? []);
      if (pr.success) setProjects((pr as any).data ?? []);
      if (co.success) setContacts((co as any).data ?? []);
      if (ta.success) setTalents((ta  as any).data ?? []);
      if (re.success) setResumes((re  as any).data ?? []);
      setLoadingData(false);
    };
    load();
  }, [isLoggedIn]);

  // ── Login flow ────────────────────────────────────────────────────────────
  const handleNextClick = (e?: React.MouseEvent | React.KeyboardEvent) => {
    e?.preventDefault();
    if (!emailInput.trim()) { setLoginError('Please enter your email.'); return; }
    setLoginError('');
    setIsTransitioning(true);
    setTimeout(() => { setShowPasswordPage(true); setIsTransitioning(false); }, 800);
  };

  const handleLoginSubmit = async (e?: React.MouseEvent | React.KeyboardEvent) => {
    e?.preventDefault();
    setLoginError('');
    const result = await apiService.adminLogin(emailInput, passwordInput);
    if (result.success && (result as any).data) {
      const { user, token } = (result as any).data;
      localStorage.setItem('adminUser',  JSON.stringify(user));
      localStorage.setItem('adminToken', token);
      setLoggedInUser(user);
      setIsLoggedIn(true);
      setEmailInput('');
      setPasswordInput('');
      setShowPasswordPage(false);
    } else {
      setLoginError(result.message || 'Invalid credentials.');
    }
  };

  const handleLogout = () => {
    apiService.adminLogout();
    setIsLoggedIn(false);
    setLoggedInUser(null);
    setClients([]);
    setProjects([]);
    setEmailInput('');
    setPasswordInput('');
    setShowPasswordPage(false);
  };

  // ── Resume handlers ───────────────────────────────────────────────────────
  const handleResumeStatus = async (id: number, status: string) => {
    const result = await apiService.updateResumeStatus(id, status);
    if (result.success) setResumes(prev => prev.map(r => r.id === id ? { ...r, status: status as any } : r));
  };

  // ── NEW: delete resume ────────────────────────────────────────────────────
  const handleDeleteResume = async (id: number, originalName: string) => {
    if (!window.confirm(`Delete resume "${originalName}"?\n\nThis will permanently remove the record and the uploaded file.`)) return;
    const result = await apiService.deleteResume(id);
    if (result.success) {
      setResumes(prev => prev.filter(r => r.id !== id));
    } else {
      alert(result.message || 'Failed to delete resume.');
    }
  };
  // ─────────────────────────────────────────────────────────────────────────

  // ── Client CRUD ───────────────────────────────────────────────────────────
  const handleAddClient = async () => {
    if (!newClient.name || !newClient.email || !newClient.phone || !newClient.company || !newClient.project) {
      alert('Please fill in all required fields.'); return;
    }
    const result = await apiService.createClient(newClient);
    if (result.success) {
      const refreshed = await apiService.getClients();
      if (refreshed.success) setClients((refreshed as any).data ?? []);
      setNewClient(BLANK_CLIENT);
      setShowAddClientModal(false);
    } else {
      alert(result.message || 'Failed to add client.');
    }
  };

  const handleSaveEditedClient = async () => {
    if (!editingClient) return;
    const result = await apiService.updateClient(editingClient.id, newClient);
    if (result.success) {
      const refreshed = await apiService.getClients();
      if (refreshed.success) setClients((refreshed as any).data ?? []);
      setEditingClient(null);
      setNewClient(BLANK_CLIENT);
      setShowAddClientModal(false);
    } else {
      alert(result.message || 'Failed to update client.');
    }
  };

  const handleDeleteClient = async (id: number) => {
    if (!confirm('Delete this client?')) return;
    const result = await apiService.deleteClient(id);
    if (result.success) {
      setClients(prev => prev.filter(c => c.id !== id));
    } else {
      alert(result.message || 'Failed to delete client.');
    }
  };

  const openEditClient = (client: Client) => {
    setEditingClient(client);
    setNewClient({ name: client.name, email: client.email, phone: client.phone, company: client.company, project: client.project, status: client.status });
    setShowAddClientModal(true);
  };

  // ── Project CRUD ──────────────────────────────────────────────────────────
  const handleAddProject = async () => {
    if (!newProject.title || !newProject.client || !newProject.start_date || !newProject.end_date || !newProject.budget || !newProject.description) {
      alert('Please fill in all required fields.'); return;
    }
    const result = await apiService.createProject(newProject);
    if (result.success) {
      const refreshed = await apiService.getProjects();
      if (refreshed.success) setProjects((refreshed as any).data ?? []);
      setNewProject(BLANK_PROJECT);
      setShowAddProjectModal(false);
    } else {
      alert(result.message || 'Failed to add project.');
    }
  };

  const handleSaveEditedProject = async () => {
    if (!editingProject) return;
    const result = await apiService.updateProject(editingProject.id, newProject);
    if (result.success) {
      const refreshed = await apiService.getProjects();
      if (refreshed.success) setProjects((refreshed as any).data ?? []);
      setEditingProject(null);
      setNewProject(BLANK_PROJECT);
      setShowAddProjectModal(false);
    } else {
      alert(result.message || 'Failed to update project.');
    }
  };

  const handleDeleteProject = async (id: number) => {
    if (!confirm('Delete this project?')) return;
    const result = await apiService.deleteProject(id);
    if (result.success) setProjects(prev => prev.filter(p => p.id !== id));
    else alert(result.message || 'Failed to delete project.');
  };

  const openEditProject = (project: Project) => {
    setEditingProject(project);
    setNewProject({ title: project.title, client: project.client, status: project.status, start_date: project.start_date, end_date: project.end_date, budget: project.budget, description: project.description });
    setShowAddProjectModal(true);
  };

  // ── Contact / Talent status updates ──────────────────────────────────────
  const handleContactStatus = async (id: number, status: string) => {
    const result = await apiService.updateContactStatus(id, status);
    if (result.success) setContacts(prev => prev.map(c => c.id === id ? { ...c, status: status as any } : c));
  };

  const handleTalentStatus = async (id: number, status: string) => {
    const result = await apiService.updateTalentStatus(id, status);
    if (result.success) setTalents(prev => prev.map(t => t.id === id ? { ...t, status: status as any } : t));
  };

  const getStatusColor = (status: string) => {
    const map: Record<string, string> = {
      'Active':      'bg-green-100 text-green-800',
      'In Progress': 'bg-green-100 text-green-800',
      'Pending':     'bg-yellow-100 text-yellow-800',
      'Planning':    'bg-yellow-100 text-yellow-800',
      'Completed':   'bg-blue-100 text-blue-800',
      'On Hold':     'bg-red-100 text-red-800',
    };
    return map[status] || 'bg-gray-100 text-gray-800';
  };

  // ── Login screens ─────────────────────────────────────────────────────────
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center px-4">
        <div className="w-full max-w-[900px]">
          <div className="bg-white border border-[#dadce0] rounded-[25px] shadow-[0_4px_20px_0_rgba(0,0,0,.1)] flex flex-col relative overflow-hidden" style={{ minHeight: showPasswordPage ? 500 : 400 }}>
            {isTransitioning && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gray-100 z-10">
                <div className="h-full bg-[#1a73e8]" style={{ animation: 'googleLoading 0.8s ease-out forwards' }} />
              </div>
            )}

            <div className="p-4 flex items-center">
              <img src="https://i.ibb.co/fdnS7tfG/icons8-google-48.png" alt="Google" className="h-[40px] mr-4" />
              <span className="text-[18px] text-[#202124]">Sign in with Google</span>
            </div>
            <div className="border-t border-gray-300" />

            <div className="p-10 flex flex-col md:flex-row items-start justify-between flex-1">
              <div className="mb-8 md:mb-0 md:mr-16">
                <img src="https://i.ibb.co/KcXsDnXG/JKC-WHITE-BACKGROUND.png" alt="JKC" className="h-[60px] mb-6" />
                <h1 className="text-[36px] text-[#202124] mb-4">{showPasswordPage ? 'Welcome' : 'Sign in'}</h1>
                {showPasswordPage ? (
                  <div className="flex items-center">
                    <div className="w-[32px] h-[32px] bg-gray-400 rounded-full flex items-center justify-center mr-3">
                      <User className="w-[18px] h-[18px] text-white" />
                    </div>
                    <span className="text-[16px] text-[#202124] font-medium">{emailInput}</span>
                  </div>
                ) : (
                  <p className="text-[18px] text-[#202124]">to continue to <span className="text-[#0047ab]">jkconstruction.com</span></p>
                )}
              </div>

              <div className="w-full md:w-auto">
                {loginError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm">{loginError}</p>
                  </div>
                )}

                {!showPasswordPage ? (
                  <>
                    <input
                      type="text" value={emailInput} onChange={e => setEmailInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleNextClick(e)}
                      className="w-full max-w-[380px] px-8 py-[16px] border border-black rounded-[8px] text-[18px] text-black mb-6"
                      placeholder="Email or phone"
                    />
                    <div className="flex justify-end items-center space-x-4">
                      <button onClick={handleNextClick} disabled={isTransitioning}
                        className="bg-[#0047ab] text-white px-8 py-3 rounded-[20px] text-[16px] font-medium min-w-[100px] hover:bg-[#003087] transition-all">
                        {isTransitioning ? 'Loading...' : 'Next'}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative mb-6">
                      <input
                        type={showPassword ? 'text' : 'password'} value={passwordInput}
                        onChange={e => setPasswordInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleLoginSubmit(e)}
                        className="w-full max-w-[380px] px-8 py-[16px] border border-black rounded-[8px] text-[18px] text-black"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex items-center mb-6 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                      <div className={`w-[18px] h-[18px] border-2 rounded-sm mr-3 flex items-center justify-center ${showPassword ? 'bg-[#1a73e8] border-[#1a73e8]' : 'border-gray-400'}`}>
                        {showPassword && <svg className="w-[12px] h-[12px] text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                      </div>
                      <span className="text-[16px] text-gray-600">Show password</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <button onClick={() => { setShowPasswordPage(false); setPasswordInput(''); setLoginError(''); }}
                        className="text-[16px] text-[#1565c0] font-medium hover:underline">Back</button>
                      <button onClick={handleLoginSubmit}
                        className="bg-[#0047ab] text-white px-8 py-3 rounded-[20px] text-[16px] font-medium min-w-[100px] hover:bg-[#003087] transition-all">
                        Sign in
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <style>{`@keyframes googleLoading { 0%{width:0%} 25%{width:30%} 50%{width:65%} 75%{width:85%} 100%{width:100%} }`}</style>
      </div>
    );
  }

  // ── Dashboard ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="https://i.ibb.co/KcXsDnXG/JKC-WHITE-BACKGROUND.png" alt="JKC" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">JKC Admin Panel</h1>
              <p className="text-sm text-gray-600">Jay Krishna Construction</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {loggedInUser && (
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{loggedInUser.name}</p>
                <p className="text-xs text-gray-600">{loggedInUser.email}</p>
              </div>
            )}
            <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
              <LogOut className="w-4 h-4" /><span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { key: 'contacts', icon: MessageSquare, label: `Contact Submissions${contacts.filter(c => c.status === 'new').length ? ` (${contacts.filter(c => c.status === 'new').length})` : ''}` },
              { key: 'talents',  icon: UserCheck,     label: 'Talent Network' },
              { key: 'resumes',  icon: FileText,      label: `Resumes${resumes.filter(r => r.status === 'new').length ? ` (${resumes.filter(r => r.status === 'new').length})` : ''}` },
              { key: 'clients',  icon: Users,         label: 'Clients' },
              { key: 'projects', icon: Briefcase,     label: 'Projects' },
            ].map(({ key, icon: Icon, label }) => (
              <button key={key} onClick={() => setActiveTab(key)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === key ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                <Icon className="w-5 h-5 inline mr-2" />{label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {loadingData && <p className="text-gray-500 text-center py-10">Loading...</p>}

        {/* ── Contact Submissions ── */}
        {!loadingData && activeTab === 'contacts' && (
          <div>
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Submissions</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {contacts.filter(c => c.status === 'new').length} new · {contacts.length} total
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Filter:</span>
                <select value={contactFilter} onChange={e => setContactFilter(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="all">All Inquiries</option>
                  <option value="careers">Career Opportunities</option>
                  <option value="general">General Inquiry</option>
                  <option value="services">Project Consultation</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Support / Other</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              {contacts.filter(c => contactFilter === 'all' || c.inquiry_type === contactFilter).length === 0 ? (
                <div className="bg-white rounded-lg shadow p-10 text-center text-gray-500">No submissions found.</div>
              ) : contacts.filter(c => contactFilter === 'all' || c.inquiry_type === contactFilter).map(c => (
                <div key={c.id} className={`bg-white rounded-lg shadow p-5 border-l-4 ${c.status === 'new' ? 'border-blue-500' : c.status === 'replied' ? 'border-green-500' : c.status === 'archived' ? 'border-gray-300' : 'border-yellow-400'}`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="font-semibold text-gray-900">{c.first_name} {c.last_name}</span>
                        <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${
                          c.status === 'new' ? 'bg-blue-100 text-blue-800' :
                          c.status === 'read' ? 'bg-gray-100 text-gray-700' :
                          c.status === 'replied' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-700'}`}>{c.status}</span>
                        <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${
                          c.inquiry_type === 'careers' ? 'bg-purple-100 text-purple-700' :
                          c.inquiry_type === 'services' ? 'bg-orange-100 text-orange-700' :
                          c.inquiry_type === 'partnership' ? 'bg-teal-100 text-teal-700' :
                          'bg-gray-100 text-gray-600'}`}>
                          {({'general':'General Inquiry','careers':'Career Opportunities','services':'Project Consultation','partnership':'Partnership','other':'Support / Other'} as Record<string,string>)[c.inquiry_type] || c.inquiry_type}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        <a href={`mailto:${c.email}`} className="hover:text-indigo-600">{c.email}</a>
                        {c.phone ? ` · ${c.phone}` : ''}
                        {' · '}{new Date(c.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </div>
                      {expandedContact === c.id && (
                        <p className="text-sm text-gray-700 bg-gray-50 rounded p-3 mt-2 whitespace-pre-wrap">{c.message}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                      <button onClick={() => setExpandedContact(expandedContact === c.id ? null : c.id)}
                        className="text-xs text-indigo-600 hover:text-indigo-800 border border-indigo-200 rounded px-2 py-1">
                        {expandedContact === c.id ? 'Hide' : 'View'}
                      </button>
                      <select value={c.status}
                        onChange={e => handleContactStatus(c.id, e.target.value)}
                        className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                        <option value="new">New</option>
                        <option value="read">Read</option>
                        <option value="replied">Replied</option>
                        <option value="archived">Archived</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Talent Network ── */}
        {!loadingData && activeTab === 'talents' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Talent Network</h2>
              <p className="text-sm text-gray-500 mt-1">{talents.length} registrations total</p>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {['Name', 'Contact', 'Category', 'Experience', 'Availability', 'Status', 'Date'].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {talents.length === 0 ? (
                    <tr><td colSpan={7} className="px-6 py-10 text-center text-gray-500">No talent network submissions yet.</td></tr>
                  ) : talents.map(t => (
                    <tr key={t.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{t.first_name} {t.last_name}</div>
                        <div className="text-xs text-gray-500">{t.location}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{t.email}</div>
                        <div className="text-xs text-gray-500">{t.phone}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 capitalize">{t.job_category}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{t.experience}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{t.availability}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <select value={t.status}
                          onChange={e => handleTalentStatus(t.id, e.target.value)}
                          className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                          <option value="active">Active</option>
                          <option value="contacted">Contacted</option>
                          <option value="hired">Hired</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">{new Date(t.created_at).toLocaleDateString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Resumes ── */}
        {!loadingData && activeTab === 'resumes' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Resume Uploads
                <span className="ml-3 text-sm font-normal text-gray-500">({resumes.length} total)</span>
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {resumes.filter(r => r.status === 'new').length} new · {resumes.filter(r => r.status === 'shortlisted').length} shortlisted
              </p>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {/* ── CHANGED: added "Actions" column ── */}
                    {['Applicant', 'Contact', 'Position', 'Resume File', 'Size', 'Status', 'Date', 'Actions'].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {resumes.length === 0 ? (
                    <tr><td colSpan={8} className="px-6 py-10 text-center text-gray-500">No resumes uploaded yet.</td></tr>
                  ) : resumes.map(r => (
                    <tr key={r.id} className={r.status === 'new' ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{r.first_name} {r.last_name}</div>
                        <div className="text-xs text-gray-500 capitalize">{r.file_type}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{r.email}</div>
                        <div className="text-xs text-gray-500">{r.phone}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{r.position}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <button
                          onClick={async () => {
                            const token = localStorage.getItem('adminToken');
                            const apiUrl = (import.meta.env as Record<string, string>).VITE_API_URL;
                            const res = await fetch(`${apiUrl}/upload/files/${r.file_name}`, {
                              headers: { Authorization: `Bearer ${token}` }
                            });
                            const blob = await res.blob();
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = r.original_name;
                            a.click();
                            URL.revokeObjectURL(url);
                          }}
                          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center gap-1"
                        >
                          <FileText className="w-4 h-4 flex-shrink-0" />
                          <span className="max-w-[180px] truncate">{r.original_name}</span>
                        </button>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                        {(r.file_size / 1024).toFixed(0)} KB
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <select
                          value={r.status}
                          onChange={e => handleResumeStatus(r.id, e.target.value)}
                          className={`text-xs border rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                            r.status === 'new'         ? 'border-blue-300 text-blue-700' :
                            r.status === 'shortlisted' ? 'border-green-300 text-green-700' :
                            r.status === 'rejected'    ? 'border-red-300 text-red-700' :
                            'border-gray-300 text-gray-700'
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="shortlisted">Shortlisted</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                        {new Date(r.created_at).toLocaleDateString('en-IN')}
                      </td>

                      {/* ── NEW: Delete button ── */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <button
                          onClick={() => handleDeleteResume(r.id, r.original_name)}
                          title="Delete resume"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-md text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                      {/* ────────────────────── */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Clients ── */}
        {!loadingData && activeTab === 'clients' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Client Management</h2>
              <button onClick={() => { setEditingClient(null); setNewClient(BLANK_CLIENT); setShowAddClientModal(true); }}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2">
                <Plus className="w-5 h-5" /><span>Add Client</span>
              </button>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {['Client', 'Contact', 'Project', 'Status', 'Actions'].map(h => (
                      <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clients.length === 0 ? (
                    <tr><td colSpan={5} className="px-6 py-10 text-center text-gray-500">No clients yet.</td></tr>
                  ) : clients.map(client => (
                    <tr key={client.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{client.name}</div>
                        <div className="text-sm text-gray-500">{client.company}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{client.email}</div>
                        <div className="text-sm text-gray-500">{client.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.project}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(client.status)}`}>{client.status}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button onClick={() => openEditClient(client)} className="text-green-600 hover:text-green-900"><Edit className="w-4 h-4" /></button>
                          <button onClick={() => handleDeleteClient(client.id)} className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Projects ── */}
        {!loadingData && activeTab === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Project Management</h2>
              <button onClick={() => { setEditingProject(null); setNewProject(BLANK_PROJECT); setShowAddProjectModal(true); }}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2">
                <Plus className="w-5 h-5" /><span>Add Project</span>
              </button>
            </div>
            <div className="grid gap-6">
              {projects.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-10 text-center text-gray-500">No projects yet.</div>
              ) : projects.map(project => (
                <div key={project.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-gray-600">Client: {project.client}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(project.status)}`}>{project.status}</span>
                      <div className="flex space-x-2">
                        <button onClick={() => openEditProject(project)} className="text-blue-600 hover:text-blue-900"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => handleDeleteProject(project.id)} className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div><span className="font-medium text-gray-900">Start:</span><p className="text-gray-600">{project.start_date}</p></div>
                    <div><span className="font-medium text-gray-900">End:</span><p className="text-gray-600">{project.end_date}</p></div>
                    <div><span className="font-medium text-gray-900">Budget:</span><p className="text-gray-600">{project.budget}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ── Add/Edit Client Modal ── */}
      {showAddClientModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{editingClient ? 'Edit Client' : 'Add New Client'}</h3>
              <button onClick={() => { setShowAddClientModal(false); setEditingClient(null); setNewClient(BLANK_CLIENT); }} className="text-gray-400 hover:text-gray-600"><X className="w-6 h-6" /></button>
            </div>
            <div className="space-y-4">
              {(['name', 'email', 'phone', 'company', 'project'] as const).map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{field} *</label>
                  <input type={field === 'email' ? 'email' : 'text'} value={newClient[field]}
                    onChange={e => setNewClient({ ...newClient, [field]: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder={`Enter ${field}`} />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select value={newClient.status} onChange={e => setNewClient({ ...newClient, status: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  {['Pending', 'Active', 'Completed'].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button onClick={() => { setShowAddClientModal(false); setEditingClient(null); setNewClient(BLANK_CLIENT); }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={editingClient ? handleSaveEditedClient : handleAddClient}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center space-x-2">
                <Save className="w-4 h-4" /><span>{editingClient ? 'Update' : 'Add'} Client</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Add/Edit Project Modal ── */}
      {showAddProjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
              <button onClick={() => { setShowAddProjectModal(false); setEditingProject(null); setNewProject(BLANK_PROJECT); }} className="text-gray-400 hover:text-gray-600"><X className="w-6 h-6" /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
                <input type="text" value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Project title" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Client *</label>
                <input type="text" value={newProject.client} onChange={e => setNewProject({ ...newProject, client: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Client name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select value={newProject.status} onChange={e => setNewProject({ ...newProject, status: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  {['Planning', 'In Progress', 'Completed', 'On Hold'].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
                  <input type="date" value={newProject.start_date} onChange={e => setNewProject({ ...newProject, start_date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date *</label>
                  <input type="date" value={newProject.end_date} onChange={e => setNewProject({ ...newProject, end_date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Budget *</label>
                <input type="text" value={newProject.budget} onChange={e => setNewProject({ ...newProject, budget: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. ₹500 Crores" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea value={newProject.description} onChange={e => setNewProject({ ...newProject, description: e.target.value })}
                  rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Project description" />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button onClick={() => { setShowAddProjectModal(false); setEditingProject(null); setNewProject(BLANK_PROJECT); }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={editingProject ? handleSaveEditedProject : handleAddProject}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center space-x-2">
                <Save className="w-4 h-4" /><span>{editingProject ? 'Update' : 'Add'} Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;