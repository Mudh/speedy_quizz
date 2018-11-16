/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Layout from '../Layout';
import Like from '../Icons/global/like';

// Styles
import './button.scss';

/**
 * Code
 */
const Button = ({ btnText, btnClass }) => (
  <button className={btnClass}>{btnText}</button>
);

/**
 * Export
 */
export default Button;
