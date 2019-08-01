import React from 'react';
import { useForm, useField } from 'react-final-form-hooks';
import { loginFormValidation } from './validation';
import {
  FormControl,
  Input,
  ValidationMessage,
  Button,
  Typography
} from '../ui';

function LoginForm({ onSubmit }) {
  const { form, handleSubmit, pristine, submitting } = useForm({
    onSubmit,
    validate: loginFormValidation
  });
  const email = useField('email', form);
  const password = useField('password', form);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: '300px', textAlign: 'right' }}
    >
      <FormControl>
        <Input id="email" type="text" {...email.input} placeholder="Email" />
        <ValidationMessage as="span">
          {email.meta.touched && email.meta.error}
        </ValidationMessage>
      </FormControl>
      <FormControl>
        <Input
          id="password"
          type="password"
          {...password.input}
          placeholder="Password"
        />
        <ValidationMessage as="span">
          {password.meta.touched && password.meta.error}
        </ValidationMessage>
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export { LoginForm };
