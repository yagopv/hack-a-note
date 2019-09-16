import React from 'react';
import { NoteItem } from './NoteItem';
import { ListItem, List, OpacityContainer } from '../ui';

function NoteList({ onSelected, isCategoryMenuOpened, notes, selectedIndex }) {
  return (
    <OpacityContainer activated={isCategoryMenuOpened}>
      <List mt="md">
        {notes.map((note, index) => (
          <ListItem key={note.id} onClick={() => onSelected(index)}>
            <NoteItem {...note} isSelected={selectedIndex === index} />
          </ListItem>
        ))}
      </List>
    </OpacityContainer>
  );
}

export { NoteList };
