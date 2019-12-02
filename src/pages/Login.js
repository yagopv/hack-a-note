import React from 'react';

import { Header } from '../components';
import { useAuth } from '../shared/context';
import { Link } from 'react-router-dom';
import useForm from 'react-hook-form';
import { isFieldValid } from '../shared/utils';
export function Login() {
  // eslint-disable-next-line no-unused-vars
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    errors,
    formState
  } = useForm({
    mode: 'onBlur'
  });

  const handleSignIn = formData => {
    return signIn(formData).catch(error => {
      setError(
        'password',
        'invalidCredentials',
        'You email or password is invalid'
      );
      setValue('password', '');
    });
  };

  // export function isFieldValid(field, errors, formState) {
  //   return errors[field] ? 'ko' : formState.touched.includes(field) && 'ok';
  // }

  return (
    <React.Fragment>
      <Header title="Notes App" />
      <main className="centered-container">
        <h3>Please login</h3>
        <form onSubmit={handleSubmit(handleSignIn)} style={{ width: '300px' }}>
          <div
            className={`form-control ${isFieldValid(
              'email',
              errors,
              formState
            )}`}
          >
            <label>Email</label>
            <input
              ref={register({
                required: 'The email is required',
                pattern: {
                  message: 'The email is not valid',
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                }
              })}
              id="email"
              name="email"
              type="text"
              placeholder="Introduce tu email"
            />
            <span className="errorMessage">
              {errors.email && errors.email.message}
            </span>
          </div>
          <div
            className={`form-control ${isFieldValid(
              'password',
              errors,
              formState
            )}`}
          >
            <label>Password</label>
            <input
              ref={register({
                required: 'The password is required',
                minLength: {
                  value: 5,
                  message: 'Password length should be greater than 4'
                }
              })}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <span className="errorMessage">
              {errors.password && errors.password.message}
            </span>
          </div>
          <div className="btn-container">
            <button
              type="submit"
              className="btn"
              disabled={formState.isSubmitting}
            >
              Log in
            </button>
            <div className="m-t-lg">
              <Link to="/register">Don't have an account. Please sign up</Link>
            </div>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
}
