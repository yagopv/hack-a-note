const LOGIN = '[AUTH] Login';
const LOGIN_SUCCESS = '[AUTH] Login Success';
const LOGIN_FAILED = '[AUTH] Login Failed';
const REGISTER = '[AUTH] Register';
const REGISTER_SUCCESS = '[AUTH] Register Success';
const REGISTER_FAILED = '[AUTH] Register Failed';

const initialState = {
  isAuthenticated: true
};

export function login() {
  return async (dispatch, getState) => {
    dispatch({ type: LOGIN_SUCCESS });
  };
}

export function register() {
  return async (dispatch, getState) => {
    dispatch({ type: REGISTER_SUCCESS });
  };
}

export function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };
    case REGISTER_SUCCESS:
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
}
