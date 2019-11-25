import axios from 'axios';
import { login, register } from './auth';
import { getNotes, getNote, updateNote, createNote, deleteNote } from './notes';

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
let token = (currentUser && currentUser.token) || null;

const TOKEN_URLS = ['/auth, /users'];

axios.interceptors.request.use(
  function(config) {
    if (token && TOKEN_URLS.indexOf(config.url) === -1) {
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
    if (response.data.token && TOKEN_URLS.indexOf(response.config.url) === -1) {
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      token = response.data.token;
    }
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      localStorage.removeItem('currentUser');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default {
  login,
  register,
  getNotes,
  getNote,
  updateNote,
  createNote,
  deleteNote
};
