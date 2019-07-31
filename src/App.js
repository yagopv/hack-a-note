import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './shared/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { About } from './pages/about';

function App() {
  return (
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
  );
}

export { App };
