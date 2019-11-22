export const theme = {
  breakpoints: {
    xs: '(max-width: 576px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1140px)'
  },
  colors: {
    primary: '#F8C51D',
    secondary: '#C86818',
    separator: '#1B1B1B',
    medium: '#999999',
    dark: '#000',
    bright: '#FFF',
    ko: '#E92119',
    ok: '#3C8C20'
  },
  font: {
    family: {
      primary: '"Raleway", sans-serif',
      secondary: '"Oswald", sans-serif',
      special: '"Press Start 2P"'
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

export const color = color => theme.colors[color];
export const fontFamily = family => theme.font.family[family];
export const fontSize = size => theme.font.size[size];
export const spacing = size => theme.spacing[size];
