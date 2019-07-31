import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.direction};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
`;

export const FlexItem = styled.div`
  flex: ${props => props.grow};
`;
