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
import './button.scss';

/**
 * Code
 */
const Button = ({ btnText, btnClass }) => (
  <button className={btnClass}>{btnText}</button>
);

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
};
/**
 * Export
 */
export default Button;
