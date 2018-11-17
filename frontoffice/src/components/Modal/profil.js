/**
 * NPM import
 */
import React from 'react';
/**
 * Local import
 */
// Components
import ModalLayout from './modalLayout';
import ProfilForm from '../Form/ProfilForm';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
const Profil = ({ closeProfil, switchToLogin }) => (
  <ModalLayout modalClass="profil" onClickCloseModal={closeProfil}>
    <Button btnClass="close" btnText="+" onClick={closeProfil} />
    <ProfilForm />
    <Button btnClass="primary" btnText="valider" />
  </ModalLayout>
);
/**
 * Export
 */
export default Profil;
