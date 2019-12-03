import React from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../shared/context';

function PrivateRoute({ children, ...others }) {
  const { isAuthenticated } = useAuth();

  return (
    <Route {...others}>
      {isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
}

PrivateRoute.displayName = 'PrivateRoute';

export { PrivateRoute };
