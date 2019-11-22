import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, useField } from 'react-final-form-hooks';
import { loginFormValidation, getValidationColor } from './validation';
import { Box, Flex } from '../ui';

export function LoginForm({ onSubmit }) {
  const { form, handleSubmit, submitting } = useForm({
    onSubmit,
    validate: loginFormValidation
  });
  const email = useField('email', form);
  const password = useField('password', form);

  return (
    <form onSubmit={handleSubmit} style={{ width: '300px' }}>
      <div className={`form-control ${getValidationColor(email.meta)}`}>
        <label>Email</label>
        <input
          id="email"
          type="text"
          {...email.input}
          placeholder="Introduce tu email"
        />
        <span className="errorMessage">
          {email.meta.touched && email.meta.error}
        </span>
      </div>
      <div className={`form-control ${getValidationColor(password.meta)}`}>
        <label>Password</label>
        <input
          id="password"
          type="password"
          {...password.input}
          placeholder="Enter your password"
        />
        <span className="errorMessage">
          {password.meta.touched && password.meta.error}
        </span>
      </div>
      <Flex direction="column" alignItems="flex-end">
        <button type="submit" className="btn" disabled={submitting}>
          Log in
        </button>
        <div className="m-t-lg">
          <Link to="/register">Don't have an account. Please sign up</Link>
        </div>
      </Flex>
    </form>
  );
}
