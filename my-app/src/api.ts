import axios from "axios";


const api = axios.create({
  baseURL: import.meta.env.VITE_HOST,
  headers: {
    "Content-Type": "application/json"
  }
})

// Interceptor para adicionar o token antes de cada requisição
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // ou sessionStorage
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)


export default api