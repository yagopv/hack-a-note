import styled from 'styled-components';
import { color } from '../../shared/theme';

export const List = styled.ul`
  list-style-type: none;
  background: ${props => props.bg};
  padding-top: 1rem;
`;

export const ListItem = styled.li`
  padding: 0.5rem 1rem;
  background: ${props => props.bg};
  color: ${props => props.color};
`;
