import React from 'react';
import styled from 'styled-components';

import { List, ListItem } from '../ui';
import { color, fontFamily } from '../../shared/theme';

function CategoryList({ items, selected, onCategorySelected }) {
  return (
    <List bg={color('primary')} pt="md">
      {items &&
        items.map((item, index) => (
          <ListItem
            onClick={() => onCategorySelected(index)}
            bg={selected === index && color('dark')}
            color={selected === index ? color('bright') : color('dark')}
            p="sm"
          >
            <Tag># {item}</Tag>
          </ListItem>
        ))}
    </List>
  );
}

const Tag = styled.p`
  font-family: ${fontFamily('primary')};
  font-weight: 700;
  color: inherit;
`;

export { CategoryList };
