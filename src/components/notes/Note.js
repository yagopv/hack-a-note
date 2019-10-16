import React, { useCallback, useState, useEffect, useRef } from 'react';
import marked from 'marked';

import {
  Flex,
  Box,
  NoteTitle,
  NoteContent,
  MarkdownPreview,
  IconButton,
  Link
} from '../ui';
import { TagsInput } from '../forms/TagsInput';
import { NoteContentEmpty } from '../ui/Notes';

function Note({ initialNote, onSaveNote, onDeleteNote }) {
  const [note, setNote] = useState({ title: '', content: '', ...initialNote });
  const [editMode, setEditMode] = useState(false);
  const titleTextarea = useRef(null);
  const contentTextarea = useRef(null);

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

  const handleDelete = useCallback(() => {
    onDeleteNote(note.id);
  }, [note.id, onDeleteNote]);

  const handleChange = useCallback(
    event => {
      console.log({ ...note, [event.target.id]: event.target.value });
      setNote({ ...note, [event.target.id]: event.target.value });
    },
    [note]
  );

  const handleChangeEditMode = useCallback(() => {
    setEditMode(!editMode);
  }, [editMode]);

  useEffect(() => {
    setNote({ title: '', content: '', ...initialNote });
  }, [initialNote]);

  useEffect(() => {
    autoSize(titleTextarea.current);
    if (editMode) {
      autoSize(contentTextarea.current);
    }
  }, [autoSize, editMode]);

  return (
    <Box p="md" overflow="auto">
      <NoteTitle
        id="title"
        ref={titleTextarea}
        placeholder="Untitled Note"
        value={note.title}
        onInput={event => autoSize(event.target)}
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
      <Flex justifyContent="flex-end" alignItems="center">
        <Link
          to=""
          onClick={handleDelete}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          Remove
          <IconButton
            width="1.2rem"
            height="1.2rem"
            ml="xs"
            image="url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3MSAyLjMwM2gtMy4zMjlWMS43NmMwLS45Ny0uNzktMS43Ni0xLjc2LTEuNzZINi40MThjLS45NyAwLTEuNzYuNzktMS43NiAxLjc2di41NDNIMS4zMjlhLjQ0Mi40NDIgMCAwMC0uNDQ0LjQ0NGMwIC4yNDYuMTk3LjQ0NC40NDQuNDQ0aC44MDN2MTAuNDM0QTIuMzc4IDIuMzc4IDAgMDA0LjUwNyAxNmg2Ljk4NmEyLjM3OCAyLjM3OCAwIDAwMi4zNzUtMi4zNzVWMy4xOTFoLjgwM2EuNDQyLjQ0MiAwIDAwLjQ0NC0uNDQ0LjQ0Mi40NDIgMCAwMC0uNDQ0LS40NDR6TTUuNTQ2IDEuNzZjMC0uNDguMzkyLS44NzIuODcyLS44NzJoMy4xNjRjLjQ4IDAgLjg3Mi4zOTIuODcyLjg3MnYuNTQzSDUuNTQ2VjEuNzZ6bTcuNDM0IDExLjg2NWExLjQ5IDEuNDkgMCAwMS0xLjQ4NyAxLjQ4N0g0LjUwN2ExLjQ5IDEuNDkgMCAwMS0xLjQ4Ny0xLjQ4N1YzLjE5MWg5Ljk2NHYxMC40MzRoLS4wMDR6IiBmaWxsPSIjQzg2ODE4Ii8+PHBhdGggZD0iTTggMTMuNTJhLjQ0Mi40NDIgMCAwMC40NDQtLjQ0NFY1LjIyN0EuNDQyLjQ0MiAwIDAwOCA0Ljc4M2EuNDQyLjQ0MiAwIDAwLS40NDQuNDQ0djcuODQ1YzAgLjI0Ny4xOTcuNDQ4LjQ0NC40NDh6TTUuMTAyIDEzLjAzYS40NDIuNDQyIDAgMDAuNDQ0LS40NDRWNS43MTNhLjQ0Mi40NDIgMCAwMC0uNDQ0LS40NDQuNDQyLjQ0MiAwIDAwLS40NDQuNDQ0djYuODcxYzAgLjI0Ny4yLjQ0NS40NDQuNDQ1ek0xMC44OTggMTMuMDNhLjQ0Mi40NDIgMCAwMC40NDQtLjQ0NFY1LjcxM2EuNDQyLjQ0MiAwIDAwLS40NDQtLjQ0NC40NDIuNDQyIDAgMDAtLjQ0NC40NDR2Ni44NzFjMCAuMjQ3LjE5Ny40NDUuNDQ0LjQ0NXoiIGZpbGw9IiNDODY4MTgiLz48L3N2Zz4=')"
          />
        </Link>
      </Flex>
      {!editMode &&
        (note.content ? (
          <MarkdownPreview
            dangerouslySetInnerHTML={{
              __html: marked(note.content, {
                gfm: true,
                breaks: true
              })
            }}
            onClick={handleChangeEditMode}
          />
        ) : (
          <NoteContentEmpty onClick={handleChangeEditMode}>
            Enter note content
          </NoteContentEmpty>
        ))}
      {editMode && (
        <NoteContent
          id="content"
          ref={contentTextarea}
          onInput={event => autoSize(event.target)}
          onChange={handleChange}
          onBlur={handleSave}
          value={note.content || ''}
        />
      )}
    </Box>
  );
}

export { Note };
