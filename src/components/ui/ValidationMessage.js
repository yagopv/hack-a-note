import styled from 'styled-components';
import { Text } from './Text';
import { color } from '../../shared/theme';

export const ValidationMessage = styled(Text)`
  position: absolute;
  top: 75px;
  font-size: 0.8rem;
  color: ${color('ko')};
`;
