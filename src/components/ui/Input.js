import styled from 'styled-components';

export const Input = styled.input`
  font-family: ${props => props.theme.font.family.primary};
  flex: 1;
  font-size: 1rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  outline: none;
  color: ${props => props.theme.colors.primary};
  ::placeholder {
    color: ${props => props.theme.colors.primary};
    opacity: 0.5;
  }
`;
