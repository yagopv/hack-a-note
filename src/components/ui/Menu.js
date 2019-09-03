import styled from 'styled-components';
import { color } from '../../shared/theme';

export const Menu = styled.section`
  ${props => `
    @media ${props.size} {
      position: fixed;
      width: 200px !important;
      height: 100%;
      transition: transform 0.3s ease-out;
      transform: ${props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
      background: ${color('black')};
    }
    @media ${props.theme.breakpoints.md} {
      position: inherit;
      width: auto;
      height: 100%;
    }
  `}
`;
