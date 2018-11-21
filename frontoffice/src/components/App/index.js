/**
 * NPM import
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
/**
 * Local import
 */
// Components
import Nav from '../Nav';
import Classement from '../Classement';
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
    <Router>
      <div>
        <Nav />

        <Route exact path="/" component={HomeVisitor} />
        <Route exact path="/classement" component={Classement} />
        <Route exact path="/faq" render={() => <div>FAQ</div>} />
        <Route exact path="/profil" render={() => <div>Profil</div>} />

        {/* <HomeMembre /> */}
        {/* <Quiz /> */}
        {/* <SideRightLog /> */}
      </div>
    </Router>
  </div>
);
/**
 * Export
 */
export default App;
