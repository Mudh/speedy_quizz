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
import LoginForm from '../Form/LoginForm';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
const Login = ({ closeLogin }) => (
  <ModalLayout modalClass="login" onClickCloseModal={closeLogin}>
    <Button btnClass="close" btnText="+" onClick={closeLogin} />
    <LoginForm />
    <span>
      Pas encore inscrit ? <a href="">Cliquez ici</a>
    </span>
    <Button btnClass="primary" btnText="valider" />
  </ModalLayout>
);

Login.propTypes = {
  closeLogin: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Login;
