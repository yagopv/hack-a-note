import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    black: '#000',
    white: '#FFF'
  }
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body, #root {
    height: 100%;
    background: black;
    color: white;
  }

  .gutter-horizontal {
    cursor: ew-resize;
  }
`;
