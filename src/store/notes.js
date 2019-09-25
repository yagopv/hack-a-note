import http from '../http';

const GET_NOTES = '[NOTES] Get Notes';
const GET_NOTES_SUCCESS = '[NOTES] Get Notes Success';
const GET_NOTES_FAILED = '[NOTES] Get Notes Failed';

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

export function notesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return { ...state, isFetching: true };
    case GET_NOTES_SUCCESS:
      return { ...state, isFetching: false, notes: action.notes };
    case GET_NOTES_FAILED:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}
