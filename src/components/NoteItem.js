import React, { useMemo } from 'react';

import { getFriendlyDate } from '../shared/utils';

function NoteItem({
  title = 'Untitled Note',
  content = 'No content',
  updatedAt,
  isSelected
}) {
  const friendlyDate = useMemo(() => getFriendlyDate(updatedAt), [updatedAt]);

  return (
    <div className={`note-item ${isSelected ? 'selected' : ''}`}>
      <div className="container">
        <div style={{ minWidth: '35px' }}>
          <span className="date">{friendlyDate}</span>
        </div>
        <div className="overflow-hidden">
          <h5 className="truncate-text title">{title || 'Untitled Note'}</h5>
          <p className="truncate-multiline-text description">
            {content || 'No content'}
          </p>
        </div>
      </div>
    </div>
  );
}

NoteItem.displayName = 'NoteItem';

export { NoteItem };
