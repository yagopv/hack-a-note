import axios from 'axios';
import { login, register } from './auth';

let token = localStorage.getItem('token') || null;

axios.interceptors.request.use(
  function(config) {
    if (token && !config.url.includes('/auth')) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    if (response.config.url.includes('/auth') && response.data.token) {
      token = response.data.token;
      localStorage.setItem('token', token);
    }
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default { login, register };
