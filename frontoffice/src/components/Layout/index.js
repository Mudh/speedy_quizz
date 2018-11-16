/**
 * NPM import
 */
import React from 'react';

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
/**
 * Export
 */
export default Layout;
