/**
 * NPM import
 */
import React from 'react';
/**
 * Local import
 */
// Components
import ModalLayout from './modalLayout';
import LoginForm from '../LoginForm';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
const Login = () => (
  <ModalLayout
    modalClass="login"
    onClickCloseModal={() => console.log('ça clique')}
  >
    <Button btnClass="close" btnText="+" />
    <LoginForm />
    <span>
      Pas encore inscrit ? <a href="">Cliquez ici</a>
    </span>
    <Button btnClass="primary" btnText="valider" />
  </ModalLayout>
);
/**
 * Export
 */
export default Login;
