import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { uiReducer } from './ui';
import { authReducer } from './auth';

export const store = createStore(
  combineReducers({
    ui: uiReducer,
    auth: authReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
