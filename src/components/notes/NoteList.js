import React from 'react';
import { NoteItem } from './NoteItem';
import { ListItem, List, OpacityContainer } from '../ui';

export function NoteList({
  onSelectNote,
  isCategoryMenuOpened,
  notes,
  selected
}) {
  return (
    <OpacityContainer activated={isCategoryMenuOpened}>
      <List mt="md">
        {notes.map((note, index) => (
          <ListItem key={note.id} onClick={() => onSelectNote(index)}>
            <NoteItem {...note} isSelected={selected === index} />
          </ListItem>
        ))}
      </List>
    </OpacityContainer>
  );
}
