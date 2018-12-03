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
import ProfilForm from '../../containers/ProfilForm';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
const Profil = ({ closeProfil, onSubmitProfil, isBounceAnimate }) => (
  <ModalLayout
    bounce={isBounceAnimate}
    modalClass="profil"
    onClick={closeProfil}
  >
    <Button btnClass="close" btnText="+" onClick={closeProfil} />
    <ProfilForm />
    <Button btnClass="primary" btnText="valider" onClick={onSubmitProfil} />
  </ModalLayout>
);

Profil.propTypes = {
  closeProfil: PropTypes.func.isRequired,
  onSubmitProfil: PropTypes.func.isRequired,
  isBounceAnimate: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default Profil;
