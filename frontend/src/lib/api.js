import axios from "axios";

// आपका लाइव और एक्टिव बैकएंड लिंक
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

// इसी लाइन के गायब होने से बिल्ड फेल हो रहा था, इसे यहाँ परफेक्ट सेट कर दिया है
export const clearToken = () => {
  localStorage.removeItem("zi_admin_access");
};
