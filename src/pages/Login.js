import React, { useCallback } from 'react';
import { Flex, Text } from '../components/ui';
import { LoginForm } from '../components/forms';
import { Header } from '../components/ui';
import { useAuth, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from '../shared/context';
import http from '../http';

function Login({ history }) {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useAuth();

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
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        fullHeight
      >
        <Text as="h3">Please login</Text>
        <LoginForm onSubmit={signIn} />
      </Flex>
    </React.Fragment>
  );
}

export { Login };
