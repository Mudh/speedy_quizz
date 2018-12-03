/**
 * npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

/**
 * local import
 */
import { setCurrentUser } from './reducers/loginForm';
import reducers from './reducers';

import ajax from './ajaxMiddleware';

// On prépare les middlewares
const appliedMiddleware = applyMiddleware(ajax);

// devTools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
  : [];

// compose : nécessaire avec les devTools
const enhancers = compose(
  appliedMiddleware,
  ...devTools,
);

// Store
const store = createStore(reducers, enhancers);

if (localStorage.getItem('jwtToken')) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.getItem('jwtToken'))));
}

/**
 * Export
 */
export default store;
