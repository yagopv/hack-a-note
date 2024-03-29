import React from 'react';
import styled from 'styled-components/macro';

import { List, ListItem } from '../ui';
import { color, fontFamily } from '../../shared/theme';

// Naming the forwardRef function we can see it named in Devtools
const CategoryList = React.forwardRef(function CategoryList(
  { items, selected, onCategorySelected },
  ref
) {
  return (
    <List ref={ref} bg={color('primary')} pt="md">
      <ListItem
        key={'all'}
        onClick={() => onCategorySelected(null)}
        bg={selected === null && color('dark')}
        color={selected === null ? color('bright') : color('dark')}
        p="sm"
      >
        <Tag>All notes</Tag>
      </ListItem>
      {items &&
        items.map((item, index) => (
          <ListItem
            key={item}
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
});

const Tag = styled.p`
  font-family: ${fontFamily('primary')};
  font-weight: 700;
  color: inherit;
`;

export { CategoryList };
