import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Text } from '../../components/ui';
import { LoginForm } from '../../components/forms';
import { login } from '../../store/auth';
import { Header } from '../../components/ui';

function Login({ history }) {
  const dispatch = useDispatch();

  const signIn = useCallback(
    async ({ email, password }) => {
      const token = await dispatch(login(email, password));
      if (token) {
        history.push('/');
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
