/**
 * NPM import
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import SideRightLog from '../../containers/SideRightLog';
import ExpiredSession from '../../containers/Modal/ExpiredSession';
// Components

// Styles
import './layout.scss';

/**
 * Code
 */
class Layout extends React.Component {
  componentDidMount() {
    const {
      checkAuth,
      loadQuizTheme,
      reloadPlayerInfos,
      isQuizStart,
      setQuizStop,
      history,
      location,
    } = this.props;
    if (localStorage.getItem('jwtToken')) {
      checkAuth();
      reloadPlayerInfos();
      loadQuizTheme();
    }
    if (
      location.pathname !== '/quiz' &&
      isQuizStart &&
      history.action === 'POP'
    ) {
      setQuizStop();
    }
    console.log(history, location);
  }

  render() {
    const {
      layoutClass,
      children,
      isAuthenticated,
      isExpiredOpen,
    } = this.props;
    const expiredSession = isExpiredOpen ? <ExpiredSession /> : null;

    return (
      <main className={`layout ${layoutClass}`}>
        <div className={`${layoutClass}__main`}>{children}</div>
        {layoutClass !== 'home' && isAuthenticated && <SideRightLog />}
        {expiredSession}
      </main>
    );
  }
}

Layout.propTypes = {
  layoutClass: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default withRouter(Layout);
