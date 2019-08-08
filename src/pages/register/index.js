import React from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Text } from '../../components/ui';
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
      <Text as="h3">Please register</Text>
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
