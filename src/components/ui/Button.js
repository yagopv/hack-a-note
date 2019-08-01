import styled from 'styled-components';

export const Button = styled.button`
  font-family: ${props => props.theme.font.family.primary};
  transition: all 0.3s;
  width: auto;
  padding: 10px 20px;
  font-size: 1rem;
  background: transparent;
  border-radius: 5px;
  border: 2px solid ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.accent};
  outline: none;
  cursor: pointer;
  :hover {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.black};
  }
  :active {
    transform: scale(1.05);
  }
`;
