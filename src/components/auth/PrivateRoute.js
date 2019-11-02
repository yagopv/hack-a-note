import React from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../../shared/context';

export function PrivateRoute({ component: Component, ...others }) {
  const [{ isAuthenticated }] = useAuth();
  console.log('AUTH: ', isAuthenticated);
  return (
    <Route
      {...others}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
