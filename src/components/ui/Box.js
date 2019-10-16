import styled from 'styled-components/macro';
import {
  withSpacingProps,
  withAlignmentProps,
  withOverflowProps
} from './uiUtils';

export const Box = styled.div`
  ${withSpacingProps}
  ${withAlignmentProps}
  ${withOverflowProps}
`;
