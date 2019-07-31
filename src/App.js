import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme, GlobalStyle } from './shared/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { About } from './pages/about';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  );
}

export { App };
