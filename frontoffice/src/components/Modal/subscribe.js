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
const Subscribe = () => (
  <ModalLayout
    modalClass="subscribe"
    onClickCloseModal={() => console.log('ça clique')}
  >
    <Button btnClass="close" btnText="+" />
    <SubscribeForm />
    <span>
      Déjà membre ? <a href="">Cliquez ici</a>
    </span>
    <Button btnClass="primary" btnText="valider" />
  </ModalLayout>
);
/**
 * Export
 */
export default Subscribe;
