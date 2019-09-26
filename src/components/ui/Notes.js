import styled from 'styled-components';
import { color, fontFamily } from '../../shared/theme';

export const NoteTitle = styled.input`
  background: transparent;
  border: none;
  color: ${color('primary')};
  font-family: ${fontFamily('secondary')};
  font-size: 2rem;
  font-weight: bold;
  outline: none;
`;

export const NoteContent = styled.textarea`
  flex: 1;
  font-size: 1rem;
  border: 2px solid ${props => color('primary')};
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  outline: none;
  display: block;
  margin: 2rem 0;
  width: 100%;
  color: ${color('text')}
  resize: none;
  overflow: hidden;
  min-height: 50px;
  max-height: 100%;
  ::placeholder {
    color: ${props => color('primary')};
    opacity: 0.5;
  }
`;
