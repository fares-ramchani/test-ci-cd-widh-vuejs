import axios from 'axios';

// Create Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Dynamically loaded from environment variables
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token
api.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors or transform data
api.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    // Handle errors (e.g., unauthorized, network issues, etc.)
    const message =
      error.response?.data?.msg || // Backend custom error message
      error.response?.data?.message || // Backend default error message
      error.message || // Axios-generated message
      'An unknown error occurred.'; // Fallback error message

    return Promise.reject({
      ...error, // Include the original error object
      message, // Include the parsed message
    });
  }
);

export default api;
