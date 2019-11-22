import styled from 'styled-components/macro';
import { color, fontFamily, fontSize } from '../../shared/theme';

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
