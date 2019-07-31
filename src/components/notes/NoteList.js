import React from 'react';
import { NoteItem } from './NoteItem';
import { ListItem, List, Box } from '../ui';

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
  }
];

function NoteList({ onClick }) {
  return (
    <Box pt="md" pr="sm" pl="sm">
      <List>
        {notes.map(note => (
          <ListItem key={note.id} onClick={onClick}>
            <NoteItem {...note} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export { NoteList };
