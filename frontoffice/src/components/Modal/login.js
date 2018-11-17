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
const Login = ({ closeLogin, switchToSubscribe }) => (
  <ModalLayout modalClass="login" onClick={closeLogin}>
    <Button btnClass="close" btnText="+" onClick={closeLogin} />
    <LoginForm />
    <span>
      Pas encore inscrit ? <span onClick={switchToSubscribe}>Cliquez ici</span>
    </span>
    <Button btnClass="primary" btnText="valider" />
  </ModalLayout>
);

Login.propTypes = {
  closeLogin: PropTypes.func.isRequired,
  switchToSubscribe: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Login;
