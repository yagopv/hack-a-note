import axios from 'axios';

export function login(email, password) {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/auth`, null, {
    auth: {
      username: email,
      password
    }
  });
}

export function register(email, password, name) {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/users`, null, {
    auth: {
      email,
      password,
      name
    }
  });
}
