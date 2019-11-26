import React from 'react';

import { Header, LoginForm } from '../components';
import { useAuth } from '../shared/context';

export function Login() {
  // eslint-disable-next-line no-unused-vars
  const { signIn } = useAuth();

  return (
    <React.Fragment>
      <Header title="Notes App" />
      <main className="centered-container">
        <h3>Please login</h3>
        <LoginForm onSubmit={signIn} />
      </main>
    </React.Fragment>
  );
}
