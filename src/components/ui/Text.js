import styled from 'styled-components';
import { Box } from './Box';

function getFamily(type, families) {
  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type)) {
    return families.headings;
  }

  return families.primary;
}

function getSize(type, sizes) {
  return sizes[type] || '1rem';
}

function getColor(type, colors) {
  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type)) {
    return colors['accent'];
  }

  return colors['primary'];
}

export const Text = styled(Box)`
  color: ${props => getColor(props.as, props.theme.colors)};
  font-family: ${props => getFamily(props.as, props.theme.font.family)};
  font-size: ${props => getSize(props.as, props.theme.font.size)};
`;
