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
const Button = ({ btnText = '', btnClass, onClick, children }) => (
  <button className={btnClass} onClick={onClick}>
    {btnText}
    {children}
  </button>
);

Button.propTypes = {
  btnText: PropTypes.string,
  onClick: PropTypes.func,
  btnClass: PropTypes.string,
};

Button.defaultProps = {
  btnText: '',
  btnClass: '',
};
/**
 * Export
 */
export default Button;
