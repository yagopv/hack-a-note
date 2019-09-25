import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Text, Header } from '../components/ui';
import { RegisterForm } from '../components/forms';
import { register } from '../store/auth';

function Register({ history }) {
  const dispatch = useDispatch();

  const signUp = useCallback(
    async ({ email, password, name }) => {
      const token = await dispatch(register(email, password, name));
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
        <Text as="h3">Please register</Text>
        <RegisterForm onSubmit={signUp} />
      </Flex>
    </React.Fragment>
  );
}

export { Register };
