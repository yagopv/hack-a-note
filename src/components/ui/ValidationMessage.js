import styled from 'styled-components';
import { Typography } from './Typography';

export const ValidationMessage = styled(Typography)`
  position: absolute;
  top: 44px;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.error};
`;
