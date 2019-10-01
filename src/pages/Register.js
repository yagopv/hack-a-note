import React, { useCallback } from 'react';
import { Flex, Text, Header } from '../components/ui';
import { RegisterForm } from '../components/forms';
import {
  useAuth,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from '../shared/context';
import http from '../http';

function Register({ history }) {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useAuth();

  const signUp = useCallback(
    async (email, password, name) => {
      try {
        dispatch({ type: REGISTER });
        const {
          data: { user, token }
        } = await http.register(email, password, name);
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

  return (
    <React.Fragment>
      <Header title="Notes App" />
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        fullHeight
      >
        <Text as="h3">Please register</Text>
        <RegisterForm onSubmit={signUp} />
      </Flex>
    </React.Fragment>
  );
}

export { Register };
