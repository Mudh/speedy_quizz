/**
 * NPM import
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Components
import Nav from '../../containers/Nav';
import Classement from '../../containers/Classement';
import Profil from '../../containers/Profil';
import PrivateRoute from '../../containers/PrivateRoute';
import Quiz from '../../containers/Quiz';
import HomeVisitor from '../../containers/HomeVisitor';
import HomeMembre from '../../containers/HomeMembre';
import Faq from '../Faq';
import Cgu from '../Cgu';
import Error from '../Error';

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
            <PrivateRoute
              exact
              path="/"
              public={HomeVisitor}
              private={HomeMembre}
            />
            <Route exact path="/classement" component={Classement} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/cgu" component={Cgu} />
            <Route exact path="/profil" component={Profil} />
            <Route exact path="/quiz" component={Quiz} />
            <Route
              render={() => (
                <div className="construc">404 mauvaise route !!</div>
              )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
/**
 * Export
 */
export default App;
