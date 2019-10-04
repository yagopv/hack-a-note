import { useReducer, useEffect, useMemo } from 'react';
import http from '../../http';

const GET_NOTES = '[NOTES] Get Notes';
const GET_NOTES_SUCCESS = '[NOTES] Get Notes Success';
const GET_NOTES_FAILED = '[NOTES] Get Notes Failed';
const SAVE_NOTE = '[NOTES] Save Note';
const SAVE_NOTE_SUCCESS = '[NOTES] Save Note Success';
const SAVE_NOTE_FAILED = '[NOTES] Save Note Failed';
const CREATE_NOTE = '[NOTES] Create Note';
const CREATE_NOTE_SUCCESS = '[NOTES] Create Note Success';
const CREATE_NOTE_FAILED = '[NOTES] Create Note Failed';
const SELECT_TAG = '[NOTES] SELECT_TAG';
const SELECT_NOTE = '[NOTES] SELECT_NOTE';

function notesReducer(state, action) {
  switch (action.type) {
    case GET_NOTES:
    case SAVE_NOTE:
    case CREATE_NOTE:
      return { ...state, isFetching: true };
    case GET_NOTES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        notes: action.notes
      };

    case GET_NOTES_FAILED:
    case SAVE_NOTE_FAILED:
    case CREATE_NOTE_FAILED:
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
    case CREATE_NOTE_SUCCESS:
      return {
        ...state,
        notes: [action.note, ...state.notes]
      };
    case SELECT_TAG:
      return { ...state, selectedTag: action.tagIndex };
    case SELECT_NOTE:
      return { ...state, selectedNote: action.noteIndex };
    default:
      return state;
  }
}

export function useNotes(
  initialState = {
    notes: [],
    isFetching: false,
    error: null,
    selectedTag: null,
    selectedNote: null
  }
) {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  // Update existing note in the server
  const saveNote = async note => {
    try {
      dispatch({ type: SAVE_NOTE });
      const { data: savedNote } = await http.updateNote(note.id, note);
      dispatch({ type: SAVE_NOTE_SUCCESS, note: savedNote });
    } catch (error) {
      dispatch({ type: SAVE_NOTE_FAILED, error });
    }
  };

  // Create a new note in the server
  const createNote = async tag => {
    try {
      dispatch({ type: CREATE_NOTE });
      const { data: createdNote } = await http.createNote({
        tags: tag ? [tag] : []
      });
      dispatch({ type: CREATE_NOTE_SUCCESS, note: createdNote });
    } catch (error) {
      dispatch({ type: CREATE_NOTE_FAILED, error });
    }
  };

  // Select tags and notes
  const selectTag = tagIndex => dispatch({ type: SELECT_TAG, tagIndex });
  const selectNote = noteIndex => dispatch({ type: SELECT_NOTE, noteIndex });

  // Get tags in notes
  const tags = useMemo(() => {
    return state.notes.reduce((acc, currentValue, index) => {
      currentValue.tags.forEach(tag => !acc.includes(tag) && acc.push(tag));
      return acc;
    }, []);
  }, [state.notes]);

  // Get Notes by tag
  const filteredNotes = useMemo(() => {
    if (!state.notes.length || state.selectedTag === null) {
      return state.notes;
    }
    return state.notes.filter(note =>
      note.tags.includes(tags[state.selectedTag])
    );
  }, [state.notes, state.selectedTag, tags]);

  // Get ALL Notes
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

  return {
    state,
    saveNote,
    createNote,
    selectTag,
    selectNote,
    tags,
    filteredNotes
  };
}
