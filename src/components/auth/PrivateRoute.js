import React from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../../shared/context';

function PrivateRoute({ component: Component, ...others }) {
  const [{ isAuthenticated }] = useAuth();

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

export { PrivateRoute };
