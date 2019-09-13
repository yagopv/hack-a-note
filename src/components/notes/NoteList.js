import React from 'react';
import { NoteItem } from './NoteItem';
import { ListItem, List, Box, OpacityContainer } from '../ui';
import { color } from '../../shared/theme';

function NoteList({ onClick, isCategoryMenuOpened, notes }) {
  return (
    <OpacityContainer activated={isCategoryMenuOpened}>
      <List mt="md">
        {notes.map(note => (
          <ListItem key={note.id} onClick={onClick}>
            <NoteItem {...note} />
          </ListItem>
        ))}
      </List>
    </OpacityContainer>
  );
}

export { NoteList };
