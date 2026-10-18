import axios from "axios";

const isBrowser = typeof window !== "undefined";

export const api = axios.create({
  baseURL: "https://zoomintern.onrender.com/api",
  headers: { "Content-Type": "application/json" },
  timeout: 60000, // Render cold start ke liye
});

export const saveToken = (token) => {
  if (isBrowser) localStorage.setItem("zi_admin_access", token);
};

export const getToken = () =>
  isBrowser ? localStorage.getItem("zi_admin_access") : null;

export const clearToken = () => {
  if (isBrowser) localStorage.removeItem("zi_admin_access");
};

// Har request ke sath token bhejo
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Token expire ho to clear karo
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) clearToken();
    return Promise.reject(err);
  }
);

export default api;
