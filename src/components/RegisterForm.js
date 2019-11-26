import React from 'react';
import { useForm, useField } from 'react-final-form-hooks';
import { Link } from 'react-router-dom';
import {
  registerFormValidation,
  getValidationColor
} from '../shared/validation';

export function RegisterForm({ onSubmit }) {
  const { form, handleSubmit, submitting } = useForm({
    onSubmit,
    validate: registerFormValidation
  });

  const fullName = useField('fullName', form);
  const email = useField('email', form);
  const password = useField('password', form);

  return (
    <form onSubmit={handleSubmit} style={{ minWidth: '300px' }}>
      <div className={`form-control ${getValidationColor(fullName.meta)}`}>
        <label>Name</label>
        <input
          id="fullName"
          type="text"
          {...fullName.input}
          placeholder="What is your name ?"
        />
        <span className="errorMessage">
          {fullName.meta.touched && fullName.meta.error}
        </span>
      </div>
      <div className={`form-control ${getValidationColor(email.meta)}`}>
        <label>Email</label>
        <input
          id="email"
          type="text"
          {...email.input}
          placeholder="Enter your email"
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
      <div className="btn-container">
        <button type="submit" className="btn" disabled={submitting}>
          Register
        </button>
        <div className="m-t-lg">
          <Link to="/login">Already have an account </Link>
        </div>
      </div>
    </form>
  );
}
