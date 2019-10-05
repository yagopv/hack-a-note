import styled, { css } from 'styled-components';
import { Box } from './Box';
import { color, fontFamily, fontSize } from '../../shared/theme';

function isHeading(type) {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type);
}

const truncatedMixin = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const truncatedMultilineMixin = css`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Text = styled(Box)`
  color: ${props =>
    props.color || (isHeading(props.as) ? color('primary') : color('text'))};
  font-weight: ${props =>
    props.background || (isHeading(props.as) ? '900' : '400')}
  font-family: ${props =>
    isHeading(props.as) ? fontFamily('secondary') : fontFamily('primary')};
  font-size: ${props => fontSize(props.as) || '0.8rem'};
  text-transform: ${props => (isHeading(props.as) ? 'uppercase' : 'none')};
  line-height: ${props => isHeading(props.as) && '2rem'};
  ${props => props.truncate === 1 && truncatedMixin}
  ${props => props.truncate > 1 && truncatedMultilineMixin}
`;
