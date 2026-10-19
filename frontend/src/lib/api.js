import axios from "axios";

// 1. छोटे अक्षरों वाला api - पूरी बेस URL के साथ
export const api = axios.create({
  baseURL: "https://zoomintern.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. बड़े अक्षरों वाला API - पूरी बेस URL के साथ (ताकि कोई भी फ़ाइल क्रैश न हो)
export const API = api;

// 3. टोकन और ऑथेंटिकेशन के सभी ज़रूरी फंक्शन्स जो अलग-अलग फाइलों को चाहिए
export const saveToken = (token) => {
  localStorage.setItem("zi_admin_access", token);
};

export const getToken = () => {
  return localStorage.getItem("zi_admin_access");
};

export const clearToken = () => {
  localStorage.removeItem("zi_admin_access");
};

export const clearInternToken = () => {
  localStorage.removeItem("zi_admin_access");
};

export const getInternToken = () => {
  return localStorage.getItem("zi_admin_access"); 
};

// सुरक्षा के लिए डिफ़ॉल्ट एक्सपोर्ट
export default api;
