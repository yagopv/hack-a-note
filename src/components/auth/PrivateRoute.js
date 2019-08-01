import React from 'react';
import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
  const { isUserAuthenticated } = useSelector(state => state.auth);
  return (
    <Route
      {...rest}
      render={props =>
        isUserAuthenticated ? (
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
