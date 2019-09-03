import React from 'react';
import { useForm, useField } from 'react-final-form-hooks';
import { registerFormValidation, getValidationColor } from './validation';
import {
  FormControl,
  Input,
  Label,
  ValidationMessage,
  Button,
  Flex
} from '../ui';

function RegisterForm({ onSubmit }) {
  const { form, handleSubmit, pristine, submitting } = useForm({
    onSubmit,
    validate: registerFormValidation
  });

  const fullName = useField('fullName', form);
  const email = useField('email', form);
  const password = useField('password', form);

  return (
    <form onSubmit={handleSubmit} style={{ minWidth: '300px' }}>
      <FormControl color={getValidationColor(fullName.meta)}>
        <Label>Name</Label>
        <Input
          id="fullName"
          type="text"
          {...fullName.input}
          placeholder="What is your name ?"
        />
        <ValidationMessage as="span">
          {fullName.meta.touched && fullName.meta.error}
        </ValidationMessage>
      </FormControl>
      <FormControl color={getValidationColor(email.meta)}>
        <Label>Email</Label>
        <Input
          id="email"
          type="text"
          {...email.input}
          placeholder="Enter your email"
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
      </Flex>
    </form>
  );
}

export { RegisterForm };
