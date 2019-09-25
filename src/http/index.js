import axios from 'axios';
import { login, register } from './auth';
import { getNotes, getNote, updateNote, createNote, deleteNote } from './notes';

let token = localStorage.getItem('token') || null;

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
      token = response.data.token;
      localStorage.setItem('token', token);
    }
    return response;
  },
  function(error) {
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
