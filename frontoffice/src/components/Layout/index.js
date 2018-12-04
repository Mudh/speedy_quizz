/**
 * NPM import
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';
import { CSSTransition, transit } from 'react-css-transition';

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
      loadRanking,
      history,
      location,
      ranking,
    } = this.props;
    if (localStorage.getItem('jwtToken')) {
      checkAuth();
      reloadPlayerInfos();
      loadQuizTheme();
    }
    if (
      location.pathname !== '/quiz' &&
      isQuizStart &&
      (history.action === 'POP' || history.action === 'PUSH')
    ) {
      setQuizStop();
    }
    if (ranking.length === 0) {
      loadRanking();
    }
    console.log('ranking', ranking.length);
  }

  render() {
    const {
      layoutClass,
      children,
      isAuthenticated,
      isExpiredOpen,
      isLoading,
    } = this.props;
    const expiredSession = isExpiredOpen ? <ExpiredSession /> : null;

    return (
      <main className={`layout ${layoutClass}`}>
        {!isLoading && (
          <div className={`layout__main ${layoutClass}__main`}>{children}</div>
        )}
        {!isLoading && layoutClass !== 'home' && isAuthenticated && (
          <SideRightLog />
        )}
        <CSSTransition
          defaultStyle={{
            opacity: '0',
            visibility: 'hidden',
          }}
          enterStyle={{
            opacity: transit('1', 200, 'linear'),
            visibility: transit('visible', 200),
          }}
          leaveStyle={{
            opacity: transit('0', 700, 'linear'),
            visibility: transit('hidden', 700),
          }}
          activeStyle={{
            opacity: '1',
            visibility: 'visible',
          }}
          active={isLoading}
        >
          <div className="layout__loader">
            <BeatLoader sizeUnit={'px'} size={35} loading={isLoading} />
          </div>
        </CSSTransition>
        {expiredSession}
      </main>
    );
  }
}
CSSTransition.childContextTypes = {}; // Default child context to make browsers happy!

Layout.propTypes = {
  layoutClass: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default withRouter(Layout);
