import React from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Text } from '../../components/ui';
import { LoginForm } from '../../components/forms';
import { login } from '../../store/auth';
import { Header } from '../../components/ui';

function Login({ history }) {
  const dispatch = useDispatch();

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
        <LoginForm
          onSubmit={() => {
            dispatch(login());
            history.push('/');
          }}
        />
      </Flex>
    </React.Fragment>
  );
}

export { Login };
