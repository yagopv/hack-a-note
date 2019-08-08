import styled from 'styled-components';
import { Text } from './Text';

export const ValidationMessage = styled(Text)`
  position: absolute;
  top: 44px;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.error};
`;
