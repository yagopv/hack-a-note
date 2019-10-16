import styled from 'styled-components/macro';
import { color, fontFamily, fontSize } from '../../shared/theme';

export const NoteTitle = styled.textarea`
  background: transparent;
  border: none;
  color: ${color('primary')};
  font-family: ${fontFamily('secondary')};
  font-size: 3rem;
  height: 70px;
  font-weight: bold;
  outline: none;
  width: 100%;
  resize: none;
  ::placeholder {
    font-family: ${fontFamily('primary')};
    opacity: 0.5;
  }
`;

export const NoteContent = styled.textarea`
  font-family: ${fontFamily('primary')};
  padding: 1rem;
  border: 2px solid ${color('primary')};
  flex: 1;
  font-size: 1rem;
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

export const NoteDate = styled.span`
  font-family: ${fontFamily('secondary')};
  position: relative;
  top: 5px;
  color: ${props => color(props.color)};
`;

export const NoteContentEmpty = styled.p`
  color: ${color('medium')};
  font-family: ${fontFamily('primary')};
  margin: 2rem 0;
  opacity: 0.5;
  font-weight: bold;
  font-size: ${fontSize('lg')};
`;
