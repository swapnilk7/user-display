import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL || "https://randomuser.me";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 1000000,
});

export default axiosInstance;
