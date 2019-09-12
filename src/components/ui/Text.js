import styled from 'styled-components';
import { Box } from './Box';
import { color, fontFamily, fontSize } from '../../shared/theme';

function isHeading(type) {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type);
}

export const Text = styled(Box)`
  color: ${props =>
    props.color || (isHeading(props.as) ? color('primary') : color('text'))};
  font-weight: ${props =>
    props.background || (isHeading(props.as) ? '900' : '400')}
  font-family: ${props =>
    isHeading(props.as) ? fontFamily('secondary') : fontFamily('primary')};
  font-size: ${props => fontSize(props.as) || '0.8rem'};
  text-transform: ${props => (isHeading(props.as) ? 'uppercase' : 'none')};
`;
