import styled from 'styled-components/macro';
import { color, fontFamily } from '../../shared/theme';

export const Button = styled.button`
  font-family: ${fontFamily('secondary')};
  transition: all 0.2s;
  min-width: 100px;
  padding: 10px 20px;
  font-size: 1rem;
  background: ${color('secondary')};
  text-transform: uppercase;
  color: ${color('bright')};
  outline: none;
  cursor: pointer;
  height: 50px;
  :hover {
    background: ${color('bright')};
    color: ${color('secondary')};
    border: 2px solid ${color('secondary')};
    font-weight: bold;
  }
  :active {
    transform: translateY(2px);
  }
`;
