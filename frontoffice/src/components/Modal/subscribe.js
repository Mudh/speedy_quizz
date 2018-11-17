/**
 * NPM import
 */
import React from 'react';
/**
 * Local import
 */
// Components
import ModalLayout from './modalLayout';
import SubscribeForm from '../Form/SubscribeForm';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
const Subscribe = ({ closeSubscribe, switchToLogin }) => (
  <ModalLayout modalClass="subscribe" onClickCloseModal={closeSubscribe}>
    <Button btnClass="close" btnText="+" onClick={closeSubscribe} />
    <SubscribeForm />
    <span>
      Déjà membre ? <span onClick={switchToLogin}>Cliquez ici</span>
    </span>
    <Button btnClass="primary" btnText="valider" />
  </ModalLayout>
);
/**
 * Export
 */
export default Subscribe;
