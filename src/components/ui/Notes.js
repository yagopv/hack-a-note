import styled from 'styled-components';
import { color, fontFamily } from '../../shared/theme';

export const NoteTitle = styled.input.attrs({ type: 'text' })`
  background: transparent;
  border: none;
  color: ${color('primary')};
  font-family: ${fontFamily('secondary')};
  font-size: 2rem;
  font-weight: bold;
  outline: none;
  width: 100%;
  ::placeholder {
    font-family: ${fontFamily('primary')};
    opacity: 0.5;
  }
`;

export const NoteContent = styled.textarea`
  font-family: ${fontFamily('primary')};
  flex: 1;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background: transparent;
  outline: none;
  display: block;
  margin: 2rem 0;
  width: 100%;
  color: ${color('medium')}
  resize: none;
  overflow: hidden;
  min-height: 50px;
  max-height: 100%;
  ::placeholder {
    color: ${props => color('medium')};
    opacity: 0.5;
  }
`;
