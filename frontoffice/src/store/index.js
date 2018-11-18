/**
 * npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
/**
 * local import
 */
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

/**
 * Export
 */
export default store;
