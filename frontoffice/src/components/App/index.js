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
            <Route
              exact
              path="/faq"
              render={() => <div className="construc">FAQ en construction</div>}
            />
            <Route
              exact
              path="/profil"
              render={() => (
                <div className="construc">Profil en construction</div>
              )}
            />
            <Route exact path="/quiz" component={Quiz} />
            <Route
              render={() => <div className="construc">404 en construction</div>}
            />
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
