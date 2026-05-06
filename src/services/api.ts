const API_BASE_URL =
  import.meta.env.VITE_API_URL;

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface ContactFormData {
  firstName: string;
  lastName:  string;
  email:     string;
  phone:     string;
  inquiryType: string;
  message:   string;
  captchaVerified: boolean;
}

export interface TalentNetworkData {
  firstName:    string;
  lastName:     string;
  email:        string;
  phone:        string;
  location:     string;
  jobCategory:  string;
  experience:   string;
  availability: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?:   T;
  errors?: Array<{ field: string; message: string }>;
}

// ─── API service class ────────────────────────────────────────────────────────

class ApiService {
  private token: string | null = null;

  setToken(t: string | null) { this.token = t; }
  getToken()                 { return this.token; }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<ApiResponse<T>> {
    try {
      const headers: Record<string, string> = {
        ...(options.body instanceof FormData
          ? {}
          : { 'Content-Type': 'application/json' }),
        ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
        ...(options.headers as Record<string, string> | undefined),
      };

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
      });

      const data = await response.json();
      return data as ApiResponse<T>;
    } catch (error) {
      console.error('API request failed:', error);
      return { success: false, message: 'Network error. Please check your connection.' };
    }
  }

  // ── Public endpoints ────────────────────────────────────────────────────

  healthCheck() {
    return this.makeRequest('/api/health');
  }

  submitContactForm(formData: ContactFormData) {
    return this.makeRequest('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  testEmailConfig() {
    return this.makeRequest('/api/contact/test');
  }

  submitTalentNetwork(data: TalentNetworkData) {
    return this.makeRequest('/api/talent-network', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  uploadResume(formData: FormData) {
    return this.makeRequest('/api/upload/resume', {
      method: 'POST',
      body: formData,
    });
  }

  getJobs() {
    return this.makeRequest<any[]>('/api/careers/jobs');
  }

  getJobDetails(jobId: number) {
    return this.makeRequest<any>(`/api/careers/jobs/${jobId}`);
  }

  // ── Auth ────────────────────────────────────────────────────────────────

  async adminLogin(email: string, password: string) {
    const res = await this.makeRequest<{ token: string; user: any }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (res.success && res.data?.token) {
      this.setToken(res.data.token);
      localStorage.setItem('adminToken', res.data.token);
    }
    return res;
  }

  adminLogout() {
    this.setToken(null);
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
  }

  adminRegister(name: string, email: string, password: string, role = 'admin') {
    return this.makeRequest('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, role }),
    });
  }

  adminChangePassword(currentPassword: string, newPassword: string) {
    return this.makeRequest('/api/auth/change-password', {
      method: 'POST',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
  }

  getAdminMe() {
    return this.makeRequest('/api/auth/me');
  }

  // ── Admin data ──────────────────────────────────────────────────────────

  getAdminStats() {
    return this.makeRequest('/api/admin/stats');
  }

  getContactSubmissions() {
    return this.makeRequest<any[]>('/api/admin/contact-submissions');
  }

  updateContactStatus(id: number, status: string) {
    return this.makeRequest(`/api/admin/contact-submissions/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  getTalentNetworkSubmissions() {
    return this.makeRequest<any[]>('/api/admin/talent-network');
  }

  updateTalentStatus(id: number, status: string) {
    return this.makeRequest(`/api/admin/talent-network/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  getResumeUploads() {
    return this.makeRequest<any[]>('/api/admin/resumes');
  }

  updateResumeStatus(id: number, status: string) {
    return this.makeRequest(`/api/admin/resumes/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  // ── NEW ─────────────────────────────────────────────────────────────────
  deleteResume(id: number) {
    return this.makeRequest(`/api/admin/resumes/${id}`, { method: 'DELETE' });
  }
  // ────────────────────────────────────────────────────────────────────────

  // Clients
  getClients()                    { return this.makeRequest<any[]>('/api/admin/clients'); }
  createClient(data: any)         { return this.makeRequest('/api/admin/clients',        { method: 'POST',   body: JSON.stringify(data) }); }
  updateClient(id: number, d: any){ return this.makeRequest(`/api/admin/clients/${id}`,  { method: 'PUT',    body: JSON.stringify(d)    }); }
  deleteClient(id: number)        { return this.makeRequest(`/api/admin/clients/${id}`,  { method: 'DELETE'                             }); }

  // Projects
  getProjects()                    { return this.makeRequest<any[]>('/api/admin/projects'); }
  createProject(data: any)         { return this.makeRequest('/api/admin/projects',         { method: 'POST',   body: JSON.stringify(data) }); }
  updateProject(id: number, d: any){ return this.makeRequest(`/api/admin/projects/${id}`,   { method: 'PUT',    body: JSON.stringify(d)    }); }
  deleteProject(id: number)        { return this.makeRequest(`/api/admin/projects/${id}`,   { method: 'DELETE'                             }); }

  // Admin job management
  createJob(data: any)          { return this.makeRequest('/api/careers/jobs',        { method: 'POST',   body: JSON.stringify(data) }); }
  updateJob(id: number, d: any) { return this.makeRequest(`/api/careers/jobs/${id}`,  { method: 'PUT',    body: JSON.stringify(d)    }); }
  deleteJob(id: number)         { return this.makeRequest(`/api/careers/jobs/${id}`,  { method: 'DELETE'                             }); }
}

export const apiService = new ApiService();

// Restore token from storage on page load
const savedToken = localStorage.getItem('adminToken');
if (savedToken) apiService.setToken(savedToken);

export default apiService;