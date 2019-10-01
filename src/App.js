import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme, GlobalStyle } from './shared/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './store';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { PrivateRoute } from './components/auth';
import Auth from './store/auth';
import UI from './store/ui';

function App() {
  return (
    <Provider store={store}>
      <Auth.Provider>
        <UI.Provider>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <GlobalStyle />
              <Router>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                </Switch>
              </Router>
            </React.Fragment>
          </ThemeProvider>
        </UI.Provider>
      </Auth.Provider>
    </Provider>
  );
}

export { App };
