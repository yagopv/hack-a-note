import React from 'react';
import { Route, Redirect } from 'react-router';
import Auth from '../../store/auth';

function PrivateRoute({ component: Component, ...others }) {
  const {
    state: { isAuthenticated }
  } = Auth.useContainer();

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
