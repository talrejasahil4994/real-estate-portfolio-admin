import axios from 'axios';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = VITE_API_BASE_URL 
  ? (VITE_API_BASE_URL.includes('/api') ? VITE_API_BASE_URL : `${VITE_API_BASE_URL}/api`)
  : '/api';

const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${IMAGE_BASE_URL}${path}`;
};

export default axiosClient;
