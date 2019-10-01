import React, { useCallback } from 'react';
import { Flex, Text, Header } from '../components/ui';
import { RegisterForm } from '../components/forms';
import Auth from '../store/auth';

function Register({ history }) {
  const auth = Auth.useContainer();

  const signUp = useCallback(async ({ email, password, name }) => {
    const token = await auth.register(email, password, name);
    if (token) {
      history.push('/');
    }
  }, [auth, history]);

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
