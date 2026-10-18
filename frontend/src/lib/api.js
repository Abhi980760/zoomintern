import axios from "axios";

// 1. बिना /api के बिल्कुल सही बेस URL
export const api = axios.create({
  baseURL: "https://zoomintern.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. बड़े अक्षरों वाला API
export const API = api;

// 3. टोकन और ऑथेंटिकेशन के सभी ज़रूरी फंक्शन्स
export const saveToken = (token) => {
  localStorage.setItem("zi_admin_access", token);
};

export const getToken = () => {
  return localStorage.getItem("zi_admin_access");
};

export const clearToken = () => {
  localStorage.removeItem("zi_admin_access");
};

// 4. इंटर्न पोर्टल के लिए गायब हुआ फंक्शन
export const getInternToken = () => {
  return localStorage.getItem("zi_admin_access"); 
};

// सुरक्षा के लिए डिफ़ॉल्ट एक्सपोर्ट
export default api;
