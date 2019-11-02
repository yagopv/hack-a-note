import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { theme, GlobalStyle } from './shared/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/dashboard';
import { PrivateRoute } from './components/auth';
import { AuthProvider, UIProvider } from './shared/context';

function App() {
  return (
    <AuthProvider>
      <UIProvider>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Router>
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
            </Router>
          </React.Fragment>
        </ThemeProvider>
      </UIProvider>
    </AuthProvider>
  );
}

export { App };
