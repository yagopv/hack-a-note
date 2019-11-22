import styled from 'styled-components/macro';
import { withSpacingProps } from './uiUtils';

export const IconButton = styled.button`
  background-image: ${props => props.image};
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: transparent;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  font-size: 0;
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 0.7;
  }
  :active {
    opacity: 1;
  }
  ${withSpacingProps}
`;
