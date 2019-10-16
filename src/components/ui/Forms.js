import styled from 'styled-components/macro';
import { fontSize, fontFamily, color as themeColor } from '../../shared/theme';
import { withSpacingProps } from './uiUtils';

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0;
  position: relative;
  color: ${({ color }) => color || themeColor('primary')};
`;

export const Label = styled.label`
  font-family: ${fontFamily('primary')};
  font-size: ${fontSize('sm')};
  color: inherit;
  display: block;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input.attrs(props => ({
  type: props.type || 'text'
}))`
  font-family: ${fontFamily('primary')};
  flex: 1;
  font-size: 1rem;
  border solid 2px;
  padding: 10px;
  background: transparent;
  outline: none;
  color: inherit;
  ::placeholder {
    color: inherit;
    opacity: 0.5;
  }
`;

export const IconInput = styled(Input)`
  background-image: ${props => props.image};
  background-repeat: no-repeat;
  background-position: 0.5rem center;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
`;

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
