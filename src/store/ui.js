import { useState } from 'react';
import { createContainer } from './Container';

function useUI(
  initialState = {
    isCategoryMenuOpened: false,
    isNoteListMenuOpened: false
  }
) {
  const [isCategoryMenuOpened, setIsCategoryMenuOpened] = useState(
    initialState.isCategoryMenuOpened
  );
  const [isNoteListMenuOpened, setIsNoteListMenuOpened] = useState(
    initialState.isNoteListMenuOpened
  );

  function toggleCategoryMenu() {
    setIsCategoryMenuOpened(!isCategoryMenuOpened);
  }

  function toggleNoteListMenu() {
    setIsNoteListMenuOpened(!isNoteListMenuOpened);
  }

  return {
    isCategoryMenuOpened,
    isNoteListMenuOpened,
    toggleCategoryMenu,
    toggleNoteListMenu
  };
}

export default createContainer(useUI);
