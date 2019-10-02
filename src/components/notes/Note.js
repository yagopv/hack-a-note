import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Box, NoteTitle, NoteContent } from '../ui';

function Note({ note: { id, title = '', content = '', tags }, onSave }) {
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteContent, setNoteContent] = useState(content);
  const textarea = useRef(null);

  const autoSize = useCallback(element => {
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 'px';
  }, []);

  const handleSave = useCallback(() => {
    onSave({ id, title: noteTitle, content: noteContent, tags });
  }, [id, noteContent, noteTitle, onSave, tags]);

  useEffect(() => {
    setNoteTitle(title);
  }, [title]);

  useEffect(() => {
    setNoteContent(content);
    autoSize(textarea.current);
  }, [autoSize, content, noteContent]);

  return (
    <Box p="md">
      <NoteTitle
        placeholder="Untitled Note"
        value={noteTitle}
        onChange={useCallback(event => setNoteTitle(event.target.value), [])}
        onBlur={handleSave}
      />
      <NoteContent
        ref={textarea}
        placeholder="Enter note content"
        onInput={event => autoSize(event.target)}
        onChange={useCallback(event => setNoteContent(event.target.value), [])}
        onBlur={handleSave}
        value={noteContent}
      />
    </Box>
  );
}

export { Note };
