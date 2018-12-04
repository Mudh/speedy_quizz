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
import SubscribeForm from '../../containers/SubscribeForm';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
class Subscribe extends React.Component {
  handleButtonFunctions = () => {
    const {
      switchToLoginSuccess,
      isSubscribeSuccess,
      onSubmitSubscribe,
      emptyPassword,
    } = this.props;
    if (isSubscribeSuccess) {
      emptyPassword();
      switchToLoginSuccess();
    } else {
      onSubmitSubscribe();
      emptyPassword();
    }
  };

  render() {
    const {
      closeSubscribe,
      switchToLogin,
      isSubscribeSuccess,
      isOpacityAnimate,
      isBounceAnimate,
    } = this.props;

    const switchButtonText = !isSubscribeSuccess
      ? 'valider'
      : 'connectez-vous !';

    return (
      <ModalLayout
        modalClass="subscribe"
        opacity={isOpacityAnimate}
        bounce={isBounceAnimate}
        onClick={closeSubscribe}
      >
        <Button btnClass="close" btnText="+" onClick={closeSubscribe} />
        {!isSubscribeSuccess && <SubscribeForm />}
        {!isSubscribeSuccess && (
          <span>
            Déjà membre ? <span onClick={switchToLogin}>Cliquez ici</span>
          </span>
        )}
        {isSubscribeSuccess && (
          <span className="modal__thanks">Merci de votre inscription !</span>
        )}
        <Button
          btnClass="primary"
          btnText={switchButtonText}
          onClick={this.handleButtonFunctions}
        />
      </ModalLayout>
    );
  }
}

Subscribe.propTypes = {
  closeSubscribe: PropTypes.func.isRequired,
  switchToLogin: PropTypes.func.isRequired,
  isOpacityAnimate: PropTypes.bool.isRequired,
  isBounceAnimate: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default Subscribe;
