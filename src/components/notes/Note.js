import React, { useCallback, useState, useEffect, useRef } from 'react';
import marked from 'marked';

import { Box, NoteTitle, NoteContent, MarkdownPreview } from '../ui';
import { TagsInput } from '../forms/TagsInput';

function Note({ initialNote, onSaveNote }) {
  const [note, setNote] = useState({ title: '', content: '', ...initialNote });
  const [editMode, setEditMode] = useState(false);
  const textarea = useRef(null);

  const autoSize = useCallback(element => {
    if (element) {
      element.style.height = '5px';
      element.style.height = element.scrollHeight + 'px';
    }
  }, []);

  const handleSave = useCallback(() => {
    if (
      initialNote.title !== note.title ||
      initialNote.content !== note.content
    ) {
      onSaveNote(note);
    }
    setEditMode(false);
  }, [initialNote.content, initialNote.title, note, onSaveNote]);

  const handleChange = useCallback(
    event => setNote({ ...note, [event.target.id]: event.target.value }),
    [note]
  );

  useEffect(() => {
    setNote({ title: '', content: '', ...initialNote });
    console.log('Initial Note Changed', initialNote);
  }, [initialNote]);

  useEffect(() => {
    if (editMode) {
      autoSize(textarea.current);
    }
  }, [autoSize, editMode]);

  return (
    <Box p="md">
      <NoteTitle
        id="title"
        placeholder="Untitled Note"
        value={note.title}
        onChange={handleChange}
        onBlur={handleSave}
      />
      <TagsInput
        id="tags"
        value={note.tags}
        onChange={tags => {
          handleChange({ target: { id: 'tags', value: tags } });
          onSaveNote({ ...note, tags });
        }}
      />
      {!editMode && note.content && (
        <MarkdownPreview
          dangerouslySetInnerHTML={{ __html: marked(note.content) }}
          onClick={() => setEditMode(true)}
        />
      )}
      {editMode && (
        <NoteContent
          id="content"
          ref={textarea}
          placeholder="Enter note content"
          onInput={event => autoSize(event.target)}
          onChange={handleChange}
          onBlur={handleSave}
          value={note.content}
        />
      )}
    </Box>
  );
}

export { Note };
