/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import SideRightLog from '../../containers/SideRightLog';
/**
 * Local import
 */
// Components

// Styles
import './layout.scss';

/**
 * Code
 */
const Layout = ({ layoutClass, children, fakeAuth }) => (
  <main className={`layout ${layoutClass}`}>
    <div className={`${layoutClass}__main`}>{children}</div>
    {layoutClass !== 'home' && fakeAuth && <SideRightLog />}
  </main>
);

Layout.propTypes = {
  layoutClass: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default Layout;
