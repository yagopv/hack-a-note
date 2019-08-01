import React from 'react';
import { useForm, useField } from 'react-final-form-hooks';
import { registerFormValidation } from './validation';
import { FormControl, Input, ValidationMessage, Button } from '../ui';

function RegisterForm({ onSubmit }) {
  const { form, handleSubmit, pristine, submitting } = useForm({
    onSubmit,
    registerFormValidation
  });

  const fullName = useField('fullName', form);
  const email = useField('email', form);
  const password = useField('password', form);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: '300px', textAlign: 'right' }}
    >
      <FormControl>
        <Input
          id="fullName"
          type="text"
          {...fullName.input}
          placeholder="Enter your name"
        />
        <ValidationMessage>
          {fullName.meta.touched && fullName.meta.error}
        </ValidationMessage>
      </FormControl>
      <FormControl>
        <Input id="email" type="text" {...email.input} placeholder="Email" />
        <ValidationMessage>
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
        <ValidationMessage>
          {password.meta.touched && password.meta.error}
        </ValidationMessage>
      </FormControl>
      <Button type="submit" disabled={pristine || submitting}>
        Submit
      </Button>
    </form>
  );
}

export { RegisterForm };
