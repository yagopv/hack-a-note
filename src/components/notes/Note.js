import React, { useCallback, useState, useEffect, useRef } from 'react';
import marked from 'marked';

import { Box, NoteTitle, NoteContent, MarkdownPreview } from '../ui';
import { TagsInput } from '../forms/TagsInput';

function Note({ note: { id, title = '', content = '', tags = [] }, onSave }) {
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteContent, setNoteContent] = useState(content);
  const [noteTags, setNoteTags] = useState(tags);
  const [editMode, setEditMode] = useState(false);
  const textarea = useRef(null);

  const autoSize = useCallback(element => {
    if (element) {
      element.style.height = '5px';
      element.style.height = element.scrollHeight + 'px';
    }
  }, []);

  const handleSave = useCallback(() => {
    setEditMode(false);
    onSave({ id, title: noteTitle, content: noteContent, tags: noteTags });
  }, [id, noteContent, noteTags, noteTitle, onSave]);

  const handleChange = useCallback(
    event => setNoteContent(event.target.value),
    []
  );

  useEffect(() => {
    setNoteTitle(title);
    setEditMode(false);
  }, [title]);

  useEffect(() => {
    setNoteContent(content);
    setEditMode(false);
  }, [content]);

  useEffect(() => {
    setNoteTags(tags);
    setEditMode(false);
  }, [tags]);

  useEffect(() => {
    if (editMode) {
      autoSize(textarea.current);
    }
  }, [autoSize, editMode]);

  return (
    <Box p="md">
      <NoteTitle
        placeholder="Untitled Note"
        value={noteTitle}
        onChange={useCallback(event => setNoteTitle(event.target.value), [])}
        onBlur={handleSave}
      />
      <TagsInput
        initialTags={noteTags}
        onChange={useCallback(tags => setNoteTags(tags), [])}
        onBlur={handleSave}
      />
      {!editMode && (
        <MarkdownPreview
          dangerouslySetInnerHTML={{ __html: marked(noteContent) }}
          onClick={() => setEditMode(true)}
        />
      )}
      {editMode && (
        <NoteContent
          ref={textarea}
          placeholder="Enter note content"
          onInput={event => autoSize(event.target)}
          onChange={handleChange}
          onBlur={handleSave}
          value={noteContent}
        />
      )}
    </Box>
  );
}

export { Note };
