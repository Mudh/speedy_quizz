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
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// compose : nécessaire avec les devTools
const enhancers = compose(
  appliedMiddleware,
  ...devTools,
);

// Store
const store = createStore(reducers, enhancers);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.token)));
}

/**
 * Export
 */
export default store;
