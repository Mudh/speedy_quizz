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
const Profil = ({ closeProfil }) => (
  <ModalLayout modalClass="profil" onClickCloseModal={closeProfil}>
    <Button btnClass="close" btnText="+" onClick={closeProfil} />
    <ProfilForm />
    <Button btnClass="primary" btnText="valider" />
  </ModalLayout>
);

// Profil.propTypes = {
//   closeProfil: PropTypes.func.isRequired,
// };
/**
 * Export
 */
export default Profil;
