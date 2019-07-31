import styled from 'styled-components';
import { SCREEN_SIZES } from '../../shared/responsive';

export const Menu = styled.section`
  ${props => `
    @media ${props.size} {
      position: fixed;
      width: 200px !important;
      height: 100%;
      transition: transform 0.3s ease-out;
      transform: ${props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    }`}

    @media ${SCREEN_SIZES.md} {
      position: inherit;
      width: auto;
      height: 100%;
    }
`;
