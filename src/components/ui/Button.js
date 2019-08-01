import styled from 'styled-components';

export const Button = styled.button`
  font-family: ${props => props.theme.font.family.primary};
  width: auto;
  padding: 10px 20px;
  font-size: 1rem;
  background: ${props => props.theme.colors.alternative};
  border-radius: 5px;
  border: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;
