import axios from 'axios';

// 1. Install axios: npm install axios
const API_URL = 'http://localhost:5000/api'; // Your backend URL

const api = axios.create({
  baseURL: API_URL,
});

// 2. This is the "magic" part
// It automatically finds the 'token' from localStorage (set by your login)
// and adds it to the headers for protected routes.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // <-- Reads the token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // <-- Adds the token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;