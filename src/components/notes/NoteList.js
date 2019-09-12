import React from 'react';
import { NoteItem } from './NoteItem';
import { ListItem, List, Box, OpacityContainer } from '../ui';
import { color } from '../../shared/theme';

const notes = [
  {
    id: 1,
    title: 'Cras vitae lorem bibendum',
    description:
      'Quisque luctus eros felis, id imperdiet orci porta ac. Nulla pellentesque, metus eu accumsan ultricies, nisi risus blandit quam, sed sollicitudin mauris nisi ut massa'
  },
  {
    id: 2,
    title: 'Ut cursus mauris at tincidunt venenatis',
    description:
      'Cras tincidunt lectus at lectus faucibus dignissim non at nulla.'
  },
  {
    id: 3,
    title: 'Aenean vel turpis at nunc blandit commodo quis a urna',
    description:
      'Mauris iaculis ligula vel semper blandit. Morbi dapibus venenatis augue, sit amet imperdiet erat gravida id. Praesent mollis velit in nisi ullamcorper cursus'
  },
  {
    id: 4,
    title: 'Aenean vel turpis at nunc blandit commodo quis a urna',
    description:
      'Mauris iaculis ligula vel semper blandit. Morbi dapibus venenatis augue, sit amet imperdiet erat gravida id. Praesent mollis velit in nisi ullamcorper cursus'
  },
  {
    id: 5,
    title: 'Aenean vel turpis at nunc blandit commodo quis a urna',
    description:
      'Mauris iaculis ligula vel semper blandit. Morbi dapibus venenatis augue, sit amet imperdiet erat gravida id. Praesent mollis velit in nisi ullamcorper cursus'
  },
  {
    id: 6,
    title: 'Aenean vel turpis at nunc blandit commodo quis a urna',
    description:
      'Mauris iaculis ligula vel semper blandit. Morbi dapibus venenatis augue, sit amet imperdiet erat gravida id. Praesent mollis velit in nisi ullamcorper cursus'
  }
];

function NoteList({ onClick, isCategoryMenuOpened }) {
  return (
    <OpacityContainer activated={isCategoryMenuOpened}>
      <Box pb="7rem" overflowY="auto">
        <List>
          {notes.map(note => (
            <ListItem key={note.id} onClick={onClick}>
              <NoteItem {...note} isSelected />
            </ListItem>
          ))}
        </List>
      </Box>
    </OpacityContainer>
  );
}

export { NoteList };
