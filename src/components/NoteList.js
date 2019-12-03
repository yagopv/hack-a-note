import React from 'react';
import { NoteItem } from './NoteItem';

function NoteList({ onSelectNote, isTagMenuOpened, notes, selected }) {
  return (
    <div className={`opacity-container ${isTagMenuOpened ? 'activated' : ''}`}>
      <ul className="m-t-lg">
        {notes.map((note, index) => (
          <li key={note.id} onClick={() => onSelectNote(index)}>
            <NoteItem {...note} isSelected={selected === index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

NoteList.displayName = 'NoteList';

export { NoteList };
