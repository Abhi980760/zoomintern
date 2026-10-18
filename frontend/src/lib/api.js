import axios from "axios";

// आपका लाइव बैकएंड एपीआई लिंक
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

// इस लाइन के गायब होने से एरर आ रहा था, इसे हमने वापस जोड़ दिया है
export const clearToken = () => {
  localStorage.removeItem("zi_admin_access");
};
