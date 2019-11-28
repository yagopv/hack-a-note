import React, { useReducer, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import http from '../../http';

export const LOGIN_SUCCESS = '[AUTH] Login Success';
export const LOGIN_FAILED = '[AUTH] Login Failed';
export const REGISTER = '[AUTH] Register';
export const REGISTER_SUCCESS = '[AUTH] Register Success';
export const REGISTER_FAILED = '[AUTH] Register Failed';
export const LOGOUT = '[AUTH] Logout';

const AuthContext = React.createContext();

function authReducer(state, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      };
    case REGISTER_SUCCESS:
      return { ...state, user: action.user, isAuthenticated: true };
    case LOGOUT:
      return {
        isAuthenticated: false,
        isFetching: false,
        user: null
      };
    default:
      return state;
  }
}

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

const initialState = {
  isAuthenticated: !!currentUser,
  user: currentUser
};

export function AuthProvider({ children }) {
  let [state, dispatch] = useReducer(authReducer, initialState);
  const history = useHistory();

  const signIn = useCallback(
    async ({ email, password }) => {
      try {
        const {
          data: { user, token }
        } = await http.login(email, password);
        dispatch({ type: LOGIN_SUCCESS, user });
        if (token) {
          history.push('/');
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [dispatch, history]
  );

  const signUp = useCallback(
    async ({ email, fullName, password }) => {
      try {
        const {
          data: { user, token }
        } = await http.register(email, password, fullName);
        dispatch({ type: REGISTER_SUCCESS, user });
        if (token) {
          history.push('/');
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [dispatch, history]
  );

  const logout = () => dispatch({ type: LOGOUT });

  return (
    <AuthContext.Provider value={{ ...state, signIn, signUp, logout }}>
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
