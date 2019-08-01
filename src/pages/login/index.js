import React from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Typography } from '../../components/ui';
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
      <Typography as="h3">Please login</Typography>
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
