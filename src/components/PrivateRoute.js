import React from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../shared/context';

export function PrivateRoute({ children, ...others }) {
  const [{ isAuthenticated }] = useAuth();

  return (
    <Route {...others}>
      {isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
}
