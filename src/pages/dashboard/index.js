import React, { useContext } from 'react';
import Split from 'react-split';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryList } from '../../components/categories/CategoryList';
import { NoteList } from '../../components/notes/NoteList';
import { Note } from '../../components/notes/Note';
import { Menu } from '../../components/ui/Menu';
import { ThemeContext } from 'styled-components';
import { useMedia } from '../../shared/hooks/useMedia';
import { Header } from '../../components/ui/Header';
import { FlexItem, Typography } from '../../components/ui';
import { toggleCategoryMenu, toggleNoteListMenu } from '../../store/ui';

function Dashboard() {
  const theme = useContext(ThemeContext);
  const sizes = useMedia(
    [theme.breakpoints.md, theme.breakpoints.sm, theme.breakpoints.xs],
    [[15, 35, 50], [0, 30, 70], [0, 0, 100]],
    [15, 35, 50]
  );
  const dispatch = useDispatch();
  const { isCategoryMenuOpened, isNoteListMenuOpened } = useSelector(
    state => state.ui
  );

  return (
    <React.Fragment>
      <Split
        style={{
          display: 'flex',
          height: '100%',
          overflow: 'hidden',
          paddingTop: '50px'
        }}
        expandToMin={true}
        sizes={sizes}
        minSize={[100, 200, 200]}
        cursor="col-resize"
        direction="horizontal"
        snapOffset={0}
        gutterStyle={(dimension, gutterSize, index) => {
          return {
            width: '1px',
            backgroundColor: theme.colors.separator
          };
        }}
      >
        <Menu size="(max-width: 768px)" isOpen={isCategoryMenuOpened}>
          <CategoryList onClick={() => dispatch(toggleNoteListMenu())} />
        </Menu>
        <Menu size="(max-width: 576px)" isOpen={isNoteListMenuOpened}>
          <a onClick={() => dispatch(toggleNoteListMenu())}>Close</a>
          <NoteList
            onClick={() => {
              if (isCategoryMenuOpened) {
                dispatch(toggleCategoryMenu());
                if (isNoteListMenuOpened) {
                  dispatch(toggleNoteListMenu());
                }
              } else {
                dispatch(toggleCategoryMenu());
              }
            }}
          />
        </Menu>
        <Note />
      </Split>
      <Header>
        <FlexItem grow={1}>
          <span
            onClick={() => {
              if (isCategoryMenuOpened) {
                dispatch(toggleCategoryMenu());
                if (isNoteListMenuOpened) {
                  dispatch(toggleNoteListMenu());
                }
              } else {
                dispatch(toggleCategoryMenu());
              }
            }}
            style={{ fontSize: '1.5rem' }}
          >
            🍔
          </span>
        </FlexItem>
        <Typography as="p">
          Yago <span>😀</span>
        </Typography>
      </Header>
    </React.Fragment>
  );
}

export { Dashboard };
