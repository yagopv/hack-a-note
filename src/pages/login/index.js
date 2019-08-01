import React from 'react';
import { Flex, Typography } from '../../components/ui';
import { LoginForm } from '../../components/forms';

function Login() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      fullHeight
    >
      <Typography as="h3">Please login</Typography>
      <LoginForm onSubmit={() => console.log('login')} />
    </Flex>
  );
}

export { Login };
