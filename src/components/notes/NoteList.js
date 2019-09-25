import React from 'react';
import { NoteItem } from './NoteItem';
import { ListItem, List, OpacityContainer } from '../ui';

function NoteList({ onNoteSelected, isCategoryMenuOpened, notes, selected }) {
  return (
    <OpacityContainer activated={isCategoryMenuOpened}>
      <List mt="md">
        {notes.map((note, index) => (
          <ListItem key={note.id} onClick={() => onNoteSelected(index)}>
            <NoteItem {...note} isSelected={selected === index} />
          </ListItem>
        ))}
      </List>
    </OpacityContainer>
  );
}

export { NoteList };
