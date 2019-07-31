import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { Typography, Box, List, ListItem } from '../ui';
import { color } from '../../shared/theme';

const Tag = styled.span`
  color: ${color('alternative')};
`;

function CategoryList() {
  return (
    <Box m="md">
      <List>
        <ListItem>
          <Tag>#</Tag> <Typography as="span">Work notes</Typography>
        </ListItem>
        <li>
          <Tag>#</Tag> <Typography as="span">Family</Typography>
        </li>
        <li>
          <Tag>#</Tag> <Typography as="span">Read List</Typography>
        </li>
      </List>
    </Box>
  );
}

export { CategoryList };
