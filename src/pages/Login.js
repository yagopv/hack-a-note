import React, { useCallback } from 'react';
import { Flex, Text } from '../components/ui';
import { LoginForm } from '../components/forms';
import { Header } from '../components/ui';
import Auth from '../store/auth';

function Login({ history }) {
  const auth = Auth.useContainer();

  const signIn = useCallback(
    async ({ email, password }) => {
      const token = await auth.login(email, password);
      if (token) {
        history.push('/');
      }
    },
    [auth, history]
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
