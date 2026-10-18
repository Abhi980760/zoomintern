import axios from "axios";

// आपकी सटीक बेस यूआरएल यहाँ सेट है
export const api = axios.create({
  baseURL: "https://zoomintern.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const saveToken = (token) => {
  localStorage.setItem("zi_admin_access", token);
};

export const getToken = () => {
  return localStorage.getItem("zi_admin_access");
};

// इसके गायब होने से वेर्सेल एरर दे रहा था, इसे यहाँ परफेक्ट रखा है
export const clearToken = () => {
  localStorage.removeItem("zi_admin_access");
};

export default api;
