import { color } from '../../shared/theme';

export function loginFormValidation({ email, password }) {
  const errors = {};
  if (!email) {
    errors.email = 'The email is required';
  } else if (
    !email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    errors.email = 'The email is not valid';
  }

  if (!password) {
    errors.password = 'The password is required';
  } else if (password.length < 5) {
    errors.password = 'The password should be greater than 5';
  }

  return errors;
}

export function registerFormValidation({ email, password, fullName }) {
  const errors = {};
  if (!fullName) {
    errors.fullName = 'The name is required';
  }
  if (!email) {
    errors.email = 'The email is required';
  } else if (
    !email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    errors.email = 'The email is not valid';
  }

  if (!password) {
    errors.password = 'The password is required';
  } else if (password.length < 5) {
    errors.password = 'The password should be greater than 5';
  }

  return errors;
}

export function getValidationColor(field) {
  if (!field.touched) {
    return color('primary');
  } else {
    if (field.error) {
      return color('ko');
    }
    return color('ok');
  }
}
