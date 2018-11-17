/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import HomeVisitor from '../../containers/HomeVisitor';
import Nav from '../Nav';
import SideRightLog from '../SideRightLog';
// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Nav />
    <HomeVisitor />
    <SideRightLog />
  </div>
);
/**
 * Export
 */
export default App;
