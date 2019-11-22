import React from 'react';
import { NoteItem } from './NoteItem';

export function NoteList({
  onSelectNote,
  isCategoryMenuOpened,
  notes,
  selected
}) {
  return (
    <div
      className={`opacity-container ${isCategoryMenuOpened ? 'activated' : ''}`}
    >
      <ul mt="md">
        {notes.map((note, index) => (
          <li key={note.id} onClick={() => onSelectNote(index)}>
            <NoteItem {...note} isSelected={selected === index} />
          </li>
        ))}
      </ul>
    </div>
  );
}
