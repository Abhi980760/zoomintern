
import axios from "axios";

// Backend API URL
const API_BASE_URL = "https://zoomintern.onrender.com/api";

// Create Axios instance
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

// Also export API for files that use this name
export const API = api;

// Admin token functions
export const saveToken = (token) => {
  localStorage.setItem("zi_admin_access", token);
};

export const getToken = () => {
  return localStorage.getItem("zi_admin_access");
};

export const clearToken = () => {
  localStorage.removeItem("zi_admin_access");
};

// Intern token functions
export const saveInternToken = (token) => {
  localStorage.setItem("zi_intern_token", token);
};

export const getInternToken = () => {
  return localStorage.getItem("zi_intern_token");
};

export const clearInternToken = () => {
  localStorage.removeItem("zi_intern_token");
};

// Automatically attach the admin token to API requests
api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Export default API instance
export default api;
