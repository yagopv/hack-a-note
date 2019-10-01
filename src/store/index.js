import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { uiReducer } from './ui';
import { notesReducer } from './notes';

export const store = createStore(
  combineReducers({
    ui: uiReducer,
    notes: notesReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
