import styled from 'styled-components/macro';
import { Box } from './Box';

export const Flex = styled(Box)`
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.direction};
  height: ${props => (props.fullHeight ? '100%' : 'auto')};
`;

export const FlexItem = styled(Box)`
  flex: ${props => props.grow};
`;
