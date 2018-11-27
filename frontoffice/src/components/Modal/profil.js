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
import ProfilForm from '../Form/ProfilForm';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
const Profil = ({ closeProfil, onSubmitProfil }) => (
  <ModalLayout modalClass="profil" onClick={closeProfil}>
    <Button btnClass="close" btnText="+" onClick={closeProfil} />
    <ProfilForm />
    <Button btnClass="primary" btnText="valider" onClick={onSubmitProfil} />
  </ModalLayout>
);

Profil.propTypes = {
  closeProfil: PropTypes.func.isRequired,
  onSubmitProfil: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Profil;
