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
import LoginForm from '../../containers/LoginForm';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
const Login = ({
  closeLogin,
  switchToSubscribe,
  onSubmitLogin,
  isOpacityAnimate,
  isBounceAnimate,
}) => {
  return (
    <ModalLayout
      opacity={isOpacityAnimate}
      bounce={isBounceAnimate}
      modalClass="login"
      onClick={closeLogin}
    >
      <Button btnClass="close" btnText="+" onClick={closeLogin} />
      <LoginForm />
      <span>
        Pas encore inscrit ?{' '}
        <span onClick={switchToSubscribe}>Cliquez ici</span>
      </span>
      <Button btnClass="primary" btnText="valider" onClick={onSubmitLogin} />
    </ModalLayout>
  );
};

Login.propTypes = {
  closeLogin: PropTypes.func.isRequired,
  switchToSubscribe: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Login;
