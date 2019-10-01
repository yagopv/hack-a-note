import { useReducer, useCallback, useEffect } from 'react';
import http from '../../http';

const GET_NOTES = '[NOTES] Get Notes';
const GET_NOTES_SUCCESS = '[NOTES] Get Notes Success';
const GET_NOTES_FAILED = '[NOTES] Get Notes Failed';
const SAVE_NOTE = '[NOTES] Save Note';
const SAVE_NOTE_SUCCESS = '[NOTES] Save Note Success';
const SAVE_NOTE_FAILED = '[NOTES] Save Note Failed';

function notesReducer(state, action) {
  switch (action.type) {
    case GET_NOTES:
    case SAVE_NOTE:
      return { ...state, isFetching: true };
    case GET_NOTES_SUCCESS:
      return { ...state, isFetching: false, notes: action.notes };
    case GET_NOTES_FAILED:
    case SAVE_NOTE_FAILED:
      return { ...state, isFetching: false, error: action.error };
    case SAVE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.note.id) {
            return action.note;
          }
          return note;
        })
      };
    default:
      return state;
  }
}

export function useNotes(
  initialState = {
    notes: [],
    isFetching: false,
    error: null
  }
) {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  const saveNote = useCallback(async (note, originalNote) => {
    if (
      note.title.trim() === originalNote.title.trim() &&
      note.content.trim() === originalNote.content.trim()
    ) {
      return;
    }

    try {
      dispatch({ type: SAVE_NOTE });
      const { data: updatedNote } = await http.updateNote(note.id, note);
      dispatch({ type: SAVE_NOTE_SUCCESS, note: updatedNote });
    } catch (error) {
      dispatch({ type: SAVE_NOTE_FAILED, error });
    }
  }, []);

  useEffect(() => {
    async function getNotes() {
      try {
        dispatch({ type: GET_NOTES });
        const {
          data: { rows }
        } = await http.getNotes();
        dispatch({ type: GET_NOTES_SUCCESS, notes: rows });
      } catch (error) {
        dispatch({ type: GET_NOTES_FAILED, error });
      }
    }
    getNotes();
  }, []);

  return { state, saveNote };
}
