import React, { useCallback } from 'react';
import { Box, NoteTitle, NoteContent } from '../ui';

function Note({
  note: { id, title = '', content = '', tags },
  onNoteChange,
  onSave
}) {
  const autoSize = useCallback(element => {
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 'px';
  }, []);

  const handleSave = useCallback(() => {
    onSave({ id, title, content, tags });
  }, [content, id, onSave, tags, title]);

  return (
    <Box p="md">
      <NoteTitle
        value={title}
        onChange={useCallback(
          event => onNoteChange({ id, title: event.target.value }),
          [id, onNoteChange]
        )}
        onBlur={handleSave}
      />
      <NoteContent
        onInput={event => autoSize(event.target)}
        onChange={useCallback(
          event => onNoteChange({ id, content: event.target.value }),
          [id, onNoteChange]
        )}
        onBlur={handleSave}
        value={content}
      />
    </Box>
  );
}

export { Note };
