import React, { useReducer, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import http from '../../http';

export const LOGIN = '[AUTH] Login';
export const LOGIN_SUCCESS = '[AUTH] Login Success';
export const LOGIN_FAILED = '[AUTH] Login Failed';
export const REGISTER = '[AUTH] Register';
export const REGISTER_SUCCESS = '[AUTH] Register Success';
export const REGISTER_FAILED = '[AUTH] Register Failed';
export const LOGOUT = '[AUTH] Logout';

const AuthContext = React.createContext();

function authReducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isFetching: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isFetching: true,
        user: action.user
      };
    case LOGIN_FAILED:
      return { ...state, isFetching: false, error: action.error };
    case REGISTER:
      return { ...state, isFetching: true };
    case REGISTER_SUCCESS:
      return { ...state, isAuthenticated: true };
    case REGISTER_FAILED:
      return { ...state, isFetching: false, error: action.error };
    case LOGOUT:
      return {
        isAuthenticated: false,
        isFetching: false,
        user: null,
        error: null
      };
    default:
      return state;
  }
}

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

const initialState = {
  isFetching: false,
  error: null,
  isAuthenticated: !!currentUser,
  user: currentUser
};

export function AuthProvider({ children }) {
  let [state, dispatch] = useReducer(authReducer, initialState);
  const history = useHistory();

  const signIn = useCallback(
    async ({ email, password }) => {
      try {
        dispatch({ type: LOGIN });
        const {
          data: { user, token }
        } = await http.login(email, password);
        dispatch({ type: LOGIN_SUCCESS, user });
        if (token) {
          history.push('/');
        }
      } catch (error) {
        dispatch({ type: LOGIN_FAILED, error });
        return false;
      }
    },
    [dispatch, history]
  );

  const signUp = useCallback(
    async ({ email, fullName, password }) => {
      try {
        dispatch({ type: REGISTER });
        const {
          data: { user, token }
        } = await http.register(email, password, fullName);
        dispatch({ type: REGISTER_SUCCESS, user });
        if (token) {
          history.push('/');
        }
      } catch (error) {
        dispatch({ type: REGISTER_FAILED, error });
        return false;
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
