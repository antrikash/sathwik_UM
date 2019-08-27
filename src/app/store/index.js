import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { logger } from 'redux-logger';
import { rootReducer } from 'root/reducers';

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(logger, promiseMiddleware)
);
