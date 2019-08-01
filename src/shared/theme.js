import { createGlobalStyle } from 'styled-components';

export const theme = {
  breakpoints: {
    xs: '(max-width: 576px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1140px)'
  },
  colors: {
    primary: 'rgb(171, 173, 146)',
    accent: 'rgb(248, 197, 29)',
    alternative: 'rgb(200, 104, 24)',
    separator: 'rgb(27, 27, 27)',
    black: 'rgb(0, 0, 0)',
    white: 'rgba(255, 255, 255)',
    error: 'rgb(235, 39, 31)'
  },
  font: {
    family: {
      primary: '"Open Sans", sans-serif',
      headings: '"Roboto", monospace'
    },
    size: {
      h1: '2rem',
      h2: '1.8rem',
      h3: '1.6rem',
      h4: '1.2rem',
      h5: '1rem',
      h6: '0.8rem',
      p: '0.8rem'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem'
  }
};

export const color = color => props => props.theme.colors[color];
export const fontFamily = family => props => props.theme.font.family[family];
export const fontSize = size => props => props.theme.font.size[size];
export const spacing = size => props => props.theme.spacing[size];

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
    background: ${color('black')};
    color: ${color('primary')};
    line-height: 1.3em;
  }

  .gutter-horizontal {
    cursor: ew-resize;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${color('headings')};
  }
`;
