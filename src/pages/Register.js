import React from 'react';
import { Header, RegisterForm } from '../components';
import { useAuth } from '../shared/context';

export function Register() {
  // eslint-disable-next-line no-unused-vars
  const { signUp } = useAuth();

  return (
    <React.Fragment>
      <Header title="Notes App" />
      <main className="centered-container">
        <h3>Please register</h3>
        <RegisterForm onSubmit={signUp} />
      </main>
    </React.Fragment>
  );
}
