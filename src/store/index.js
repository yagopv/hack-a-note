import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { notesReducer } from './notes';

export const store = createStore(
  combineReducers({
    notes: notesReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
