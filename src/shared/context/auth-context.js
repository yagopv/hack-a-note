import React, { useReducer } from 'react';

export const LOGIN = '[AUTH] Login';
export const LOGIN_SUCCESS = '[AUTH] Login Success';
export const LOGIN_FAILED = '[AUTH] Login Failed';
export const REGISTER = '[AUTH] Register';
export const REGISTER_SUCCESS = '[AUTH] Register Success';
export const REGISTER_FAILED = '[AUTH] Register Failed';

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
    default:
      return state;
  }
}
const initialState = {
  isFetching: false,
  error: null,
  isAuthenticated: !!localStorage.getItem('token'),
  user: null
};

export function AuthProvider({ children }) {
  let contextValue = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  let value = React.useContext(AuthContext);
  if (value === null) {
    throw new Error('Component must be wrapped with <Container.Provider>');
  }
  return value;
}
