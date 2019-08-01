import styled from 'styled-components';

export const Textarea = styled.textarea`
  flex: 1;
  font-size: 1rem;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  outline: none;
  ::placeholder {
    color: ${props => props.theme.colors.primary};
    opacity: 0.5;
  }
`;
