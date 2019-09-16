import React from 'react';
import { NoteItem } from './NoteItem';
import { ListItem, List, OpacityContainer } from '../ui';

function NoteList({ onSelected, isCategoryMenuOpened, notes }) {
  return (
    <OpacityContainer activated={isCategoryMenuOpened}>
      <List mt="md">
        {notes.map((note, index) => (
          <ListItem key={note.id} onClick={() => onSelected(index)}>
            <NoteItem {...note} />
          </ListItem>
        ))}
      </List>
    </OpacityContainer>
  );
}

export { NoteList };
