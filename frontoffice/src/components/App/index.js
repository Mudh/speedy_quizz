/**
 * NPM import
 */
import React from 'react';
import Nav from '../Nav';
import SideRightLog from '../SideRightLog';

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
    <SideRightLog />
  </div>
);
/**
 * Export
 */
export default App;
