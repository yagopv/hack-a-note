import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { uiReducer } from './ui';

export const store = createStore(
  combineReducers({
    ui: uiReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
