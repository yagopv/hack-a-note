import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import http from '../../http';

export const LOGIN_SUCCESS = '[AUTH] Login Success';
export const LOGIN_FAILED = '[AUTH] Login Failed';
export const REGISTER = '[AUTH] Register';
export const REGISTER_SUCCESS = '[AUTH] Register Success';
export const REGISTER_FAILED = '[AUTH] Register Failed';
export const LOGOUT = '[AUTH] Logout';

const AuthContext = React.createContext();

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

export function AuthProvider({ children }) {
  const [user, setUser] = useState(currentUser);
  const [isAuthenticated, setIsAuthenticated] = useState(!!currentUser);

  const history = useHistory();

  const signIn = useCallback(
    async ({ email, password }) => {
      try {
        const {
          data: { user, token }
        } = await http.login(email, password);
        setUser(user);
        setIsAuthenticated(true);
        if (token) {
          history.push('/');
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [history]
  );

  const signUp = useCallback(
    async ({ email, fullName, password }) => {
      try {
        const {
          data: { user, token }
        } = await http.register(email, password, fullName);
        setUser(user);
        setIsAuthenticated(true);
        if (token) {
          history.push('/');
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [history]
  );

  const logout = () => {
    setUser(false);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, signIn, signUp, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  let value = React.useContext(AuthContext);
  if (value === null) {
    throw new Error('Component must be wrapped with <Container.Provider>');
  }
  return value;
}
