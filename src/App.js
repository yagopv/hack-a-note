import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './shared/theme';
import { AppContainer } from './components/app-container';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <AppContainer />
      </React.Fragment>
    </ThemeProvider>
  );
}

export { App };
