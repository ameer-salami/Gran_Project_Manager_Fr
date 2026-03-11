import axios,  { type AxiosInstance } from "axios";

const api:AxiosInstance = axios.create({
  baseURL:  import.meta.env.VITE_GRAN_PROJ_MNGR_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;