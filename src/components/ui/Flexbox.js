import styled from 'styled-components';
import { Box } from './Box';

export const Flex = styled(Box)`
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.direction};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  height: ${props => (props.fullHeight ? '100%' : 'auto')};
`;

export const FlexItem = styled(Box)`
  flex: ${props => props.grow};
`;
