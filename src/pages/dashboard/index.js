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
import { Flex, FlexItem, Text } from '../../components/ui';
import { toggleCategoryMenu, toggleNoteListMenu } from '../../store/ui';
import { DashboardLayout } from '../../components/layout/DashboardLayout';

function Dashboard() {
  const dispatch = useDispatch();
  const { isCategoryMenuOpened, isNoteListMenuOpened } = useSelector(
    state => state.ui
  );
  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <React.Fragment>
      <Header title="Notes App" tag="tag1" isAuthenticated={isAuthenticated} />
      <DashboardLayout>
        <CategoryList />
        <NoteList />
        <Note />
      </DashboardLayout>
    </React.Fragment>
  );
}

export { Dashboard };
