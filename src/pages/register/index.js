import React from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Typography } from '../../components/ui';
import { RegisterForm } from '../../components/forms';
import { register } from '../../store/auth';

function Register({ history }) {
  const dispatch = useDispatch();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      fullHeight
    >
      <Typography as="h3">Please register</Typography>
      <RegisterForm
        onSubmit={() => {
          dispatch(register());
          history.push('/');
        }}
      />
    </Flex>
  );
}

export { Register };
