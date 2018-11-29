/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import SideRightLog from '../../containers/SideRightLog';
import ExpiredSession from '../../containers/Modal/ExpiredSession';

/**
 * Local import
 */
// Components

// Styles
import './layout.scss';

/**
 * Code
 */
class Layout extends React.Component {
  componentDidMount() {
    const { checkAuth } = this.props;
    if (localStorage.getItem('jwtToken')) {
      checkAuth();
    }
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
export default Layout;
