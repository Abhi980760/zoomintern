import axios from "axios";

// 1. छोटे अक्षरों वाला api - पूरी बेस यूआरएल के साथ
export const api = axios.create({
  baseURL: "https://zoomintern.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. बड़े अक्षरों वाला API - पूरी बेस यूआरएल के साथ
export const API = axios.create({
  baseURL: "https://zoomintern.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 3. टोकन मैनेजमेंट के सभी ज़रूरी फंक्शन्स
export const saveToken = (token) => {
  localStorage.setItem("zi_admin_access", token);
};

export const getToken = () => {
  return localStorage.getItem("zi_admin_access");
};

export const clearToken = () => {
  localStorage.removeItem("zi_admin_access");
};

// सुरक्षा के लिए डिफ़ॉल्ट एक्सपोर्ट
export default api;
