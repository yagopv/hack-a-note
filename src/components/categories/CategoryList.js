import React from 'react';
import styled from 'styled-components';

import { Text, Box, List, ListItem } from '../ui';
import { color, fontFamily } from '../../shared/theme';

function CategoryList({ onClick }) {
  return (
    <List bg={color('primary')} pt="md">
      <ListItem
        onClick={onClick}
        bg={color('dark')}
        color={color('bright')}
        p="sm"
      >
        <Tag># Work notes</Tag>
      </ListItem>
      <ListItem onClick={onClick} color={color('dark')} p="sm">
        <Tag># Family</Tag>
      </ListItem>
      <ListItem onClick={onClick} color={color('dark')} p="sm">
        <Tag># Read List</Tag>
      </ListItem>
    </List>
  );
}

const Tag = styled.p`
  font-family: ${fontFamily('primary')};
  font-weight: 700;
  color: inherit;
`;

export { CategoryList };
