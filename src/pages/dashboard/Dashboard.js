import React from 'react';
import { CategoryList } from '../../components/categories/CategoryList';
import { NoteList } from '../../components/notes/NoteList';
import { Note } from '../../components/notes/Note';
import { Header } from '../../components/ui/Header';
import { Flex, IconInput, IconButton } from '../../components/ui';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useAuth, useUI, LOGOUT } from '../../shared/context';
import { useNotes } from './useNotes';

function Dashboard() {
  const [{ user }, dispatch] = useAuth();
  const [{ isCategoryMenuOpened }, setUIState] = useUI();
  const {
    state: { selectedTag, selectedNote },
    saveNote,
    createNote,
    selectTag,
    selectNote,
    tags,
    filteredNotes
  } = useNotes();

  return (
    <React.Fragment>
      <Header
        title="Notes App"
        tag="tag1"
        user={user}
        onToggleMenu={() =>
          setUIState({ isCategoryMenuOpened: !isCategoryMenuOpened })
        }
        onLogout={() => {
          dispatch({ type: LOGOUT });
          localStorage.removeItem('currentUser');
        }}
      />
      <Flex as="main" fullHeight>
        <DashboardLayout isMenuOpened={isCategoryMenuOpened}>
          <CategoryList
            items={tags}
            selected={selectedTag}
            onCategorySelected={index => {
              selectTag(index);
              selectNote(null);
            }}
          />
          <Flex direction="column" p="md">
            <Flex>
              <IconInput
                type="search"
                image={
                  'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjIzMyAyMS44NmwtNS43MTItNS45NGE5LjY1OSA5LjY1OSAwIDAwMi4yNzMtNi4yM2MwLTUuMzQzLTQuMzQ3LTkuNjktOS42OS05LjY5QzQuNzYzIDAgLjQxNSA0LjM0Ny40MTUgOS42OWMwIDUuMzQzIDQuMzQ4IDkuNjkgOS42OSA5LjY5YTkuNTg2IDkuNTg2IDAgMDA1LjU1Mi0xLjc1M2w1Ljc1NSA1Ljk4NWMuMjQxLjI1LjU2NS4zODguOTExLjM4OGExLjI2NSAxLjI2NSAwIDAwLjkxLTIuMTR6TTEwLjEwNSAyLjUyOGMzLjk0OSAwIDcuMTYyIDMuMjEzIDcuMTYyIDcuMTYyIDAgMy45NS0zLjIxMyA3LjE2Mi03LjE2MiA3LjE2Mi0zLjk1IDAtNy4xNjMtMy4yMTMtNy4xNjMtNy4xNjIgMC0zLjk1IDMuMjEzLTcuMTYyIDcuMTYzLTcuMTYyeiIgZmlsbD0iI0Y4QzUxRCIvPjwvc3ZnPg==)'
                }
              />
              <IconButton
                image={
                  'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iNDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjMiIGN5PSIyMyIgcj0iMjIuNSIgZmlsbD0iI0Y4QzUxRCIgc3Ryb2tlPSIjMDAwIi8+PHBhdGggZD0iTTMwLjUgMjEuNTQ0di40NDhsLjQ0NS4wNUE2LjI0OSA2LjI0OSAwIDAxMzYuNSAyOC4yNWE2LjI1MiA2LjI1MiAwIDAxLTUuNTU1IDYuMjA5bC0uMzcuMDQxSDEzLjV2LTIzaDEzLjEwM2wzLjg5NyAzLjg5NXY2LjE1em0tMy42NDgtOS4wODhsLS44NTQtLjg1M3YxLjIwN2guNS0uNVYxNS41cy4xNDctLjM1NC41LS41djFoMy44OTlsLS44NTQtLjg1NC0yLjY5MS0yLjY5ek0xNCAzMy41di41aDEzLjQyOGwtMS4xMDItLjg5YTYuMjQ3IDYuMjQ3IDAgMDEzLjIyOS0xMS4wN2wuNDQ1LS4wNDh2LTUuNDkzaC00LjVWMTJIMTRWMzMuNXptMTAuNTg2LTUuMjUxdi4wMDJhNS42NzQgNS42NzQgMCAwMDUuNjYzIDUuNjYxaC4wMDJhNS42NzMgNS42NzMgMCAwMDUuNjYxLTUuNjZ2LS4wMDNhNS42NzQgNS42NzQgMCAwMC01LjY2LTUuNjYzaC0uMDAzYTUuNjc0IDUuNjc0IDAgMDAtNS42NjMgNS42NjN6IiBmaWxsPSIjRjhDNTFEIiBzdHJva2U9IiMwMDAiLz48cGF0aCBkPSJNMzAuNTAyIDI3LjV2LjVIMzMuNXYuNWgtMi45OTh2M0gzMHYtM2gtM1YyOGgzdi0zaC41MDJ2Mi41eiIgZmlsbD0iI0Y4QzUxRCIgc3Ryb2tlPSIjMDAwIi8+PC9zdmc+)'
                }
                onClick={() => createNote(tags[selectedTag])}
                ml={'xs'}
              />
            </Flex>
            <NoteList
              isCategoryMenuOpened={isCategoryMenuOpened}
              notes={filteredNotes}
              mt="md"
              selected={selectedNote}
              onSelectNote={selectNote}
            />
          </Flex>
          {filteredNotes[selectedNote] && (
            <Note
              initialNote={filteredNotes[selectedNote]}
              onSaveNote={note => saveNote(note)}
            />
          )}
        </DashboardLayout>
      </Flex>
    </React.Fragment>
  );
}

export { Dashboard };
