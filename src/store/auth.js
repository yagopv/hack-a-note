import http from '../http';

const LOGIN = '[AUTH] Login';
const LOGIN_SUCCESS = '[AUTH] Login Success';
const LOGIN_FAILED = '[AUTH] Login Failed';
const REGISTER = '[AUTH] Register';
const REGISTER_SUCCESS = '[AUTH] Register Success';
const REGISTER_FAILED = '[AUTH] Register Failed';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  error: null,
  user: null
};

export function login(email, password) {
  return async (dispatch, getState) => {
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
  };
}

export function register(email, password, name) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: REGISTER });
      const registerData = await http.register(email, password, name);
      dispatch({ type: REGISTER_SUCCESS, registerData });
    } catch (error) {
      dispatch({ type: REGISTER_FAILED, error });
    }
  };
}

export function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return { ...state, isFetching: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isFetching: true,
        user: payload
      };
    case LOGIN_FAILED:
      return { ...state, isFetching: false, error: payload };
    case REGISTER:
      return { ...state, isFetching: true };
    case REGISTER_SUCCESS:
      return { ...state, isAuthenticated: true };
    case REGISTER_FAILED:
      return { ...state, isFetching: false, error: payload };
    default:
      return state;
  }
}
