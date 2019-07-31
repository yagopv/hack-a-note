import React from 'react';
import styled from 'styled-components';

import { Typography, Box, List, ListItem } from '../ui';
import { color } from '../../shared/theme';

const Tag = styled.span`
  color: ${color('alternative')};
`;

function CategoryList({ onClick }) {
  return (
    <Box m="md">
      <List>
        <ListItem onClick={onClick}>
          <Tag>#</Tag> <Typography as="span">Work notes</Typography>
        </ListItem>
        <ListItem onClick={onClick}>
          <Tag>#</Tag> <Typography as="span">Family</Typography>
        </ListItem>
        <ListItem onClick={onClick}>
          <Tag>#</Tag> <Typography as="span">Read List</Typography>
        </ListItem>
      </List>
    </Box>
  );
}

export { CategoryList };
