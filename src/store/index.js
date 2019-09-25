import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { uiReducer } from './ui';
import { authReducer } from './auth';
import { notesReducer } from './notes';

export const store = createStore(
  combineReducers({
    ui: uiReducer,
    auth: authReducer,
    notes: notesReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
