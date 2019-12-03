import axios from 'axios';
import { login, register } from './auth';
import { getNotes, getNote, updateNote, createNote, deleteNote } from './notes';

function isBearerTokenRequired(url) {
  const parsedURL = new URL(url);
  if (['/auth', '/user'].includes(parsedURL.pathname)) {
    return false;
  }
  return true;
}

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
let token = (currentUser && currentUser.token) || null;

axios.interceptors.request.use(
  function(config) {
    if (token && isBearerTokenRequired(config.url)) {
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
    if (response.data.token) {
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      token = response.data.token;
    }
    return response;
  },
  function(error) {
    if (
      error.response.status === 401 &&
      error.config.url.indexOf('/auth') === -1
    ) {
      localStorage.removeItem('currentUser');
      window.location.href = '/login';
    }
    return Promise.reject(error.response);
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
