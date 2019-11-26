import React, { useRef } from 'react';
import { Note, Header, NoteList, CategoryList } from '../components';
import { useAuth, useUI, LOGOUT } from '../shared/context';
import { useNotes } from '../shared/hooks/useNotes';
import { useMedia } from '../shared/hooks/useMedia';
import { useOnClickOutside } from '../shared/hooks/useOnClickOutside';

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
            <div className="flex">
              <input
                className="search"
                type="search"
                onChange={event => filterNotesByText(event.target.value)}
              />
              <button
                className="icon-button add-note"
                width="2.5rem"
                height="2.5rem"
                image={
                  'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iNDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjMiIGN5PSIyMyIgcj0iMjIuNSIgZmlsbD0iI0Y4QzUxRCIgc3Ryb2tlPSIjMDAwIi8+PHBhdGggZD0iTTMwLjUgMjEuNTQ0di40NDhsLjQ0NS4wNUE2LjI0OSA2LjI0OSAwIDAxMzYuNSAyOC4yNWE2LjI1MiA2LjI1MiAwIDAxLTUuNTU1IDYuMjA5bC0uMzcuMDQxSDEzLjV2LTIzaDEzLjEwM2wzLjg5NyAzLjg5NXY2LjE1em0tMy42NDgtOS4wODhsLS44NTQtLjg1M3YxLjIwN2guNS0uNVYxNS41cy4xNDctLjM1NC41LS41djFoMy44OTlsLS44NTQtLjg1NC0yLjY5MS0yLjY5ek0xNCAzMy41di41aDEzLjQyOGwtMS4xMDItLjg5YTYuMjQ3IDYuMjQ3IDAgMDEzLjIyOS0xMS4wN2wuNDQ1LS4wNDh2LTUuNDkzaC00LjVWMTJIMTRWMzMuNXptMTAuNTg2LTUuMjUxdi4wMDJhNS42NzQgNS42NzQgMCAwMDUuNjYzIDUuNjYxaC4wMDJhNS42NzMgNS42NzMgMCAwMDUuNjYxLTUuNjZ2LS4wMDNhNS42NzQgNS42NzQgMCAwMC01LjY2LTUuNjYzaC0uMDAzYTUuNjc0IDUuNjc0IDAgMDAtNS42NjMgNS42NjN6IiBmaWxsPSIjRjhDNTFEIiBzdHJva2U9IiMwMDAiLz48cGF0aCBkPSJNMzAuNTAyIDI3LjV2LjVIMzMuNXYuNWgtMi45OTh2M0gzMHYtM2gtM1YyOGgzdi0zaC41MDJ2Mi41eiIgZmlsbD0iI0Y4QzUxRCIgc3Ryb2tlPSIjMDAwIi8+PC9zdmc+)'
                }
                onClick={async () => {
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
                ml={'sm'}
              ></button>
            </div>
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
      </main>
    </React.Fragment>
  );
}
