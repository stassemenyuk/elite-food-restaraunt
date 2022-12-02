import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducer/reducer';

const asyncFunctionMiddleware = (storeAPI) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(storeAPI.dispatch, storeAPI.getState);
  }
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(asyncFunctionMiddleware));

export default store;
