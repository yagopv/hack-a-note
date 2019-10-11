import styled from 'styled-components';
import { color, fontFamily } from '../../shared/theme';
import { linkMixin } from './Link';

export const MarkdownPreview = styled.div`
  color: ${color('medium')}
  margin: 2rem 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${color('primary')};
    font-family: ${fontFamily('secondary')};
    text-transform: uppercase;
    margin: 20px 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.8rem;
  }

  p {
    font-size: 1rem;
    margin: 10px 0;
    color: ${color('medium')};
    font-family: ${fontFamily('primary')};
  }

  a {
    ${linkMixin}
  }

  blockquote {
    margin: 10px 0;
    border-left: 5px solid ${color('primary')};
    padding-left: 1rem;
  }
`;
