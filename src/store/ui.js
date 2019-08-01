const TOGGLE_CATEGORY_MENU = '[UI] Toggle Category Menu';
const TOGGLE_NOTELIST_MENU = '[UI] Toggle NoteList Menu';

const initialState = {
  isCategoryMenuOpened: false,
  isNoteListMenuOpened: false
};

export function toggleCategoryMenu() {
  return {
    type: TOGGLE_CATEGORY_MENU
  };
}

export function toggleNoteListMenu() {
  return {
    type: TOGGLE_NOTELIST_MENU
  };
}

export function uiReducer(state = initialState, { type }) {
  switch (type) {
    case TOGGLE_CATEGORY_MENU:
      return { ...state, isCategoryMenuOpened: !state.isCategoryMenuOpened };
    case TOGGLE_NOTELIST_MENU:
      return { ...state, isNoteListMenuOpened: !state.isNoteListMenuOpened };
    default:
      return state;
  }
}
