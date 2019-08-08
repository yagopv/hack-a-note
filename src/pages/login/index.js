import React from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Text } from '../../components/ui';
import { LoginForm } from '../../components/forms';
import { login } from '../../store/auth';

function Login({ history }) {
  const dispatch = useDispatch();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      fullHeight
    >
      <Text as="h3">Please login</Text>
      <LoginForm
        onSubmit={() => {
          dispatch(login());
          history.push('/');
        }}
      />
    </Flex>
  );
}

export { Login };
