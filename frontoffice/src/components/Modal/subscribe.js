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
import SubscribeForm from '../../containers/SubscribeForm';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
const Subscribe = ({ closeSubscribe, switchToLogin }) => (
  <ModalLayout modalClass="subscribe" onClick={closeSubscribe}>
    <Button btnClass="close" btnText="+" onClick={closeSubscribe} />
    <SubscribeForm />
    <span>
      Déjà membre ? <span onClick={switchToLogin}>Cliquez ici</span>
    </span>
    <Button btnClass="primary" btnText="valider" />
  </ModalLayout>
);

Subscribe.propTypes = {
  closeSubscribe: PropTypes.func.isRequired,
  switchToLogin: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Subscribe;
