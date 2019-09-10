import React from 'react';
import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...others }) {
  const { isAuthenticated } = useSelector(state => state.auth);
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
