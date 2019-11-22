import React, { useMemo } from 'react';

import { Text } from '../ui/Text';
import { getFriendlyDate } from '../../shared/utils';

export function NoteItem({
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
          <Text as="h5" truncate={1}>
            {title || 'Untitled Note'}
          </Text>
          <Text as="p" truncate={3} color={isSelected ? 'dark' : 'medium'}>
            {content || 'No content'}
          </Text>
        </div>
      </div>
    </div>
  );
}
