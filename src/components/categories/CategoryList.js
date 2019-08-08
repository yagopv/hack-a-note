import React from 'react';
import styled from 'styled-components';

import { Text, Box, List, ListItem } from '../ui';
import { color } from '../../shared/theme';

const Tag = styled.span`
  color: ${color('alternative')};
`;

function CategoryList({ onClick }) {
  return (
    <Box m="md">
      <List>
        <ListItem onClick={onClick}>
          <Tag>#</Tag> <Text as="span">Work notes</Text>
        </ListItem>
        <ListItem onClick={onClick}>
          <Tag>#</Tag> <Text as="span">Family</Text>
        </ListItem>
        <ListItem onClick={onClick}>
          <Tag>#</Tag> <Text as="span">Read List</Text>
        </ListItem>
      </List>
    </Box>
  );
}

export { CategoryList };
