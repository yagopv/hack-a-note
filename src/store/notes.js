import http from '../http';

const GET_NOTES = '[NOTES] Get Notes';
const GET_NOTES_SUCCESS = '[NOTES] Get Notes Success';
const GET_NOTES_FAILED = '[NOTES] Get Notes Failed';
const UPDATE_NOTE = '[NOTES] Update Note';
const SAVE_NOTE = '[NOTES] Save Note';
const SAVE_NOTE_SUCCESS = '[NOTES] Save Note Success';
const SAVE_NOTE_FAILED = '[NOTES] Save Note Failed';

const initialState = {
  notes: [],
  isFetching: false,
  error: null
};

export function getNotes() {
  return async dispatch => {
    try {
      dispatch({ type: GET_NOTES });
      const {
        data: { rows }
      } = await http.getNotes();
      dispatch({ type: GET_NOTES_SUCCESS, notes: rows });
    } catch (error) {
      dispatch({ type: GET_NOTES_FAILED, error });
    }
  };
}

export function updateNote(change) {
  return {
    type: UPDATE_NOTE,
    change
  };
}

export function saveNote(note) {
  return async dispatch => {
    try {
      dispatch({ type: SAVE_NOTE });
      const updatedNote = await http.updateNote(note.id, note);
      dispatch({ type: SAVE_NOTE_SUCCESS, note: updatedNote });
    } catch (error) {
      dispatch({ type: SAVE_NOTE_FAILED, error });
    }
  };
}

export function notesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return { ...state, isFetching: true };
    case GET_NOTES_SUCCESS:
      return { ...state, isFetching: false, notes: action.notes };
    case GET_NOTES_FAILED:
      return { ...state, isFetching: false, error: action.error };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.change.id) {
            return { ...note, ...action.change };
          }
          return note;
        })
      };
    default:
      return state;
  }
}
