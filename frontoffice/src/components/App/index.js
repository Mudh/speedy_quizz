/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import HomeVisitor from '../../containers/HomeVisitor';
import HomeMembre from '../HomeMembre';
import Quiz from '../Quiz';
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
    {/* <Quiz /> */}
    <SideRightLog />
   

  </div>
);
/**
 * Export
 */
export default App;
