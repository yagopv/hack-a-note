import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import marked from 'marked';

import { Dialog } from './Dialog';
import { TagsInput } from './TagsInput';

function Note({ initialNote, onSaveNote, onDeleteNote }) {
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
      <textarea
        id="title"
        className="title"
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
      <div className="note-container">
        <Link
          to=""
          onClick={() => setShowDialog(true)}
          style={{
            display: 'block',
            textAlign: 'right',
            borderBottom: 'none'
          }}
        >
          Remove
          <button className="icon-button remove"></button>
        </Link>
      </div>
      {!editMode &&
        (note.content ? (
          <div
            className="markdown"
            dangerouslySetInnerHTML={{
              __html: marked(note.content, {
                gfm: true,
                breaks: true
              })
            }}
            onClick={handleChangeEditMode}
          />
        ) : (
          <p className="empty" onClick={handleChangeEditMode}>
            Enter note content
          </p>
        ))}
      {editMode && (
        <textarea
          id="content"
          className="content"
          ref={contentTextarea}
          onInput={event => autoSize(event.target)}
          onChange={handleChange}
          onBlur={handleSave}
          value={note.content || ''}
        />
      )}
      {showDialog && (
        <Dialog
          onAccept={() => {
            handleDelete();
            setShowDialog(false);
          }}
          onCancel={() => setShowDialog(false)}
        >
          Sure to remove this note ?
        </Dialog>
      )}
    </div>
  );
}

Note.displayName = 'Note';

export { Note };
