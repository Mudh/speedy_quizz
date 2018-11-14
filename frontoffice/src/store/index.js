/**
 * npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * local import
 */
import reducer from './reducer';

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
const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
