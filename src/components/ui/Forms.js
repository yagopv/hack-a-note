import styled from 'styled-components';
import { fontSize, fontFamily, color as themeColor } from '../../shared/theme';

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

export const Input = styled.input`
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
