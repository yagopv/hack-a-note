import styled from 'styled-components';

export const ValidationMessage = styled.span`
  position: absolute;
  top: 42px;
  font-size: 1rem;
  color: ${props => props.theme.colors.error};
`;
