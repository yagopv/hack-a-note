import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Header, LoginForm } from '../components';
import { useAuth, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from '../shared/context';
import http from '../http';

export function Login() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useAuth();
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

  return (
    <React.Fragment>
      <Header title="Notes App" />
      <main className="centered-container">
        <h3>Please login</h3>
        <LoginForm onSubmit={signIn} />
      </main>
    </React.Fragment>
  );
}
