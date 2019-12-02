import React, { useRef } from 'react';
import { Note, Header, NoteList, CategoryList } from '../components';
import { useAuth, useUI } from '../shared/context';
import { useNotes } from '../shared/hooks/useNotes';
import { useMedia } from '../shared/hooks/useMedia';
import { useOnClickOutside } from '../shared/hooks/useOnClickOutside';
import { MadPumpkin } from '../components/MadPumpkin';
import { Search } from '../components/Search';

export function Dashboard() {
  const { user, logout } = useAuth();
  const [uiState, setUIState] = useUI();
  const {
    state: { selectedTag, selectedNote, isFetching },
    saveNote,
    createNote,
    selectTag,
    selectNote,
    deleteNote,
    tags,
    filteredNotes,
    filterNotesByText
  } = useNotes();
  const isMobile = useMedia(['(min-width: 576px)'], [false], true);
  const categoryList = useRef(null);
  useOnClickOutside(categoryList, () => {
    if (uiState.isCategoryMenuOpened) {
      setUIState({
        isCategoryMenuOpened: false,
        isNoteListMenuOpened: false
      });
    }
  });

  return (
    <React.Fragment>
      <Header
        title="Notes App"
        tag={tags[selectedTag]}
        user={user}
        onToggleMenu={() =>
          setUIState({
            isCategoryMenuOpened: !uiState.isCategoryMenuOpened,
            isNoteListMenuOpened: false
          })
        }
        onLogout={() => {
          logout();
          localStorage.removeItem('currentUser');
        }}
      />
      <main id="dashboard">
        <div
          className={`grid ${
            uiState.isCategoryMenuOpened
              ? 'menu-opened'
              : uiState.isNoteListMenuOpened
              ? 'notes-opened'
              : ''
          }`}
        >
          <CategoryList
            ref={categoryList}
            items={tags}
            selected={selectedTag}
            onCategorySelected={index => {
              selectTag(index);
              setUIState({
                isCategoryMenuOpened: false,
                isNoteListMenuOpened: false
              });
              selectNote(null);
            }}
          />
          <div className="note-list">
            <Search
              onSearchTextChanged={filterNotesByText}
              onAddNote={async () => {
                if (isFetching) {
                  return;
                }
                await createNote(tags[selectedTag]);
                selectNote(0);
                setUIState({
                  isNoteListMenuOpened: true,
                  isCategoryMenuOpened: false
                });
              }}
            />
            <NoteList
              isCategoryMenuOpened={uiState.isCategoryMenuOpened}
              notes={filteredNotes}
              mt="md"
              selected={selectedNote}
              onSelectNote={index => {
                selectNote(index);
                setUIState({
                  isNoteListMenuOpened: true,
                  isCategoryMenuOpened: false
                });
              }}
            />
          </div>
          {filteredNotes[selectedNote] && (
            <Note
              initialNote={filteredNotes[selectedNote]}
              onSaveNote={note => saveNote(note)}
              onDeleteNote={async id => {
                if (isFetching) {
                  return;
                }
                await deleteNote(id);
                setUIState({
                  isNoteListMenuOpened: false,
                  isCategoryMenuOpened: false
                });
              }}
            />
          )}
          {!filteredNotes[selectedNote] && (
            <h3 className="no-note-selected">
              Select a note to start previewing and editing
            </h3>
          )}
        </div>
        {isMobile && uiState.isNoteListMenuOpened && (
          <button
            className="icon-button add-note-mobile"
            style={{ position: 'fixed', bottom: '20px', left: '20px' }}
            onClick={() =>
              setUIState({
                isNoteListMenuOpened: false,
                isCategoryMenuOpened: false
              })
            }
          ></button>
        )}
        {isFetching && (
          <div className="loader">
            <MadPumpkin />
          </div>
        )}
      </main>
    </React.Fragment>
  );
}
