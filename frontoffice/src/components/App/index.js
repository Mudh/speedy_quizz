/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Nav from '../Nav';
import Quiz from '../../containers/Quiz';
import SideRightLog from '../../containers/SideRightLog';
import HomeVisitor from '../../containers/HomeVisitor';
import HomeMembre from '../../containers/HomeMembre';
// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Nav />
    {/* <HomeVisitor /> */}
    <HomeMembre />
    {/* <Quiz /> */}
    <SideRightLog />
  </div>
);
/**
 * Export
 */
export default App;
