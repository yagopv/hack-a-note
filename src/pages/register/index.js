import React from 'react';
import { Flex, Typography } from '../../components/ui';
import { RegisterForm } from '../../components/forms';

function Register() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      fullHeight
    >
      <Typography as="h3">Please register</Typography>
      <RegisterForm onSubmit={() => console.log('register')} />
    </Flex>
  );
}

export { Register };
