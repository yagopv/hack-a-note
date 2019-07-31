import styled from 'styled-components';
import { color } from '../../shared/theme';

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  top: 0;
  bottom: 0;
  height: 50px;
  border-bottom: 1px solid ${color('separator')};
`;
