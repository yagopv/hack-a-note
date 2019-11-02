import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, Text, Header } from '../components/ui';
import { RegisterForm } from '../components/forms';
import {
  useAuth,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from '../shared/context';
import http from '../http';

export function Register() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useAuth();
  const history = useHistory();

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
