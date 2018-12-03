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
const ExpiredSession = ({ closeExpired, openLogin }) => (
  <ModalLayout modalClass="expired" onClick={closeExpired}>
    <Button btnClass="close" btnText="+" onClick={closeExpired} />
    <p>
      Votre session a expiré, <br /> reconnectez-vous !
    </p>
    <Button btnClass="primary" btnText="Se reconnecter" onClick={openLogin} />
  </ModalLayout>
);

ExpiredSession.propTypes = {
  closeExpired: PropTypes.func.isRequired,
  openLogin: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default ExpiredSession;
