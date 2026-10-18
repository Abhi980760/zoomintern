import axios from "axios";

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
