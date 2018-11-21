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
  Switch,
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

const App = () => {
  return (
    <div id="app">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={HomeVisitor} />
            <Route exact path="/loggued" component={HomeMembre} />
            <Route exact path="/classement" component={Classement} />
            <Route exact path="/faq" render={() => <div>FAQ</div>} />
            <Route exact path="/profil" render={() => <div>Profil</div>} />
            <Route exact path="/quiz" component={Quiz} />
            <Route render={() => <div>404</div>} />
          </Switch>
          {/* <SideRightLog /> */}
        </div>
      </Router>
    </div>
  );
};
/**
 * Export
 */
export default App;
