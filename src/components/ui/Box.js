import styled from 'styled-components';
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
