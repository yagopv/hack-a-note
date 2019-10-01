import { useReducer } from 'react';
import http from '../http';
import { createContainer } from './Container';

const LOGIN = '[AUTH] Login';
const LOGIN_SUCCESS = '[AUTH] Login Success';
const LOGIN_FAILED = '[AUTH] Login Failed';
const REGISTER = '[AUTH] Register';
const REGISTER_SUCCESS = '[AUTH] Register Success';
const REGISTER_FAILED = '[AUTH] Register Failed';

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

function useAuth(
  initialState = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('token'),
    error: null,
    user: null
  }
) {
  let [state, dispatch] = useReducer(authReducer, initialState);

  async function login(email, password) {
    try {
      dispatch({ type: LOGIN });
      const {
        data: { user, token }
      } = await http.login(email, password);
      dispatch({ type: LOGIN_SUCCESS, user });
      return token;
    } catch (error) {
      dispatch({ type: LOGIN_FAILED, error });
      return false;
    }
  }

  async function register(email, password, name) {
    try {
      dispatch({ type: REGISTER });
      const {
        data: { user, token }
      } = await http.register(email, password, name);
      dispatch({ type: REGISTER_SUCCESS, user });
      return token;
    } catch (error) {
      dispatch({ type: REGISTER_FAILED, error });
      return false;
    }
  }

  return { state, login, register };
}

export default createContainer(useAuth);
