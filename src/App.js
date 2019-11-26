import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login, Register, Dashboard } from './pages';
import { PrivateRoute } from './components';
import { AppProviders } from './shared/context';

function App() {
  return (
    <Router>
      <AppProviders>
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </AppProviders>
    </Router>
  );
}

export { App };
