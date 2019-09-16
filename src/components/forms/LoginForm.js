import React from 'react';
import { useForm, useField } from 'react-final-form-hooks';
import { loginFormValidation, getValidationColor } from './validation';
import {
  FormControl,
  Label,
  Input,
  ValidationMessage,
  Button,
  Box,
  Link,
  Flex
} from '../ui';

function LoginForm({ onSubmit }) {
  const { form, handleSubmit } = useForm({
    onSubmit,
    validate: loginFormValidation
  });
  const email = useField('email', form);
  const password = useField('password', form);

  return (
    <form onSubmit={handleSubmit} style={{ width: '300px' }}>
      <FormControl color={getValidationColor(email.meta)}>
        <Label>Email</Label>
        <Input
          id="email"
          type="text"
          {...email.input}
          placeholder="Introduce tu email"
        />
        <ValidationMessage as="span">
          {email.meta.touched && email.meta.error}
        </ValidationMessage>
      </FormControl>
      <FormControl color={getValidationColor(password.meta)}>
        <Label>Password</Label>
        <Input
          id="password"
          type="password"
          {...password.input}
          placeholder="Enter your password"
        />
        <ValidationMessage as="span">
          {password.meta.touched && password.meta.error}
        </ValidationMessage>
      </FormControl>
      <Flex direction="column" alignItems="flex-end">
        <Button type="submit">Submit</Button>
        <Box mt="md">
          <Link to="/register">Register </Link> |
          <Link to="/forgot-password"> Forgot Password</Link>
        </Box>
      </Flex>
    </form>
  );
}

export { LoginForm };
