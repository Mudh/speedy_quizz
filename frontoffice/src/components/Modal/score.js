/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components
import ModalLayout from './modalLayout';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
const Score = ({ closeScore }) => (
  <ModalLayout modalClass="score" onClick={closeScore}>
    <Button btnClass="close" btnText="+" onClick={closeScore} />
    <p>
      Bravo tu as fini <br /> le quiz !!
    </p>
    <Button btnClass="primary" btnText="Rejouer" />
  </ModalLayout>
);

Score.propTypes = {
  closeScore: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Score;
