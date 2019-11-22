import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import marked from 'marked';

import {
  Flex,
  NoteTitle,
  NoteContent,
  MarkdownPreview,
  IconButton
} from '../ui';
import { TagsInput } from '../forms/TagsInput';
import { NoteContentEmpty } from '../ui/Notes';
import { Dialog } from '../ui/Dialog';

export function Note({ initialNote, onSaveNote, onDeleteNote }) {
  const [note, setNote] = useState({ title: '', content: '', ...initialNote });
  const [editMode, setEditMode] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
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
    <div className="note">
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
          onClick={() => setShowDialog(true)}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          Remove
          <button className="icon-button remove"></button>
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
      {showDialog && (
        <Dialog onAccept={handleDelete} onCancel={() => setShowDialog(false)}>
          Sure to remove this note ?
        </Dialog>
      )}
    </div>
  );
}
