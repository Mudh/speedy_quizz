/**
 * NPM import
 */
import React from 'react';
import Nav from '../Nav';

/**
 * Local import
 */
// Components
import Home from '../Home';
// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Nav />
    <Home />
  </div>
);
/**
 * Export
 */
export default App;
