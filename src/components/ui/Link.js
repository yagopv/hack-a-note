import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { color, fontFamily } from '../../shared/theme';

export const Link = styled(RouterLink)`
  font-family: ${fontFamily('secondary')};
  color: ${color('secondary')};
  text-transform: uppercase;
  text-decoration: underline;
`;
