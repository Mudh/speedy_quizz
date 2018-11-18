/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components

// Styles
import './layout.scss';

/**
 * Code
 */
const Layout = ({ layoutClass, children }) => (
  <main className={`layout ${layoutClass}`}>{children}</main>
);

Layout.propTypes = {
  layoutClass: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default Layout;
