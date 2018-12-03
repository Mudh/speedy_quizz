/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
 * Local import
 */
// Components
import Modal from './index';
// Styles
import './modal.scss';

/**
 * Code
 */
const ModalLayout = ({ modalClass, onClick, opacity, bounce, children }) => {
  const modalClassName = classNames(`modal__wrapper modal__${modalClass}`, {
    isOpacityAnimate: opacity,
    isBounceAnimate: bounce,
  });
  return (
    <Modal>
      <span className="modal__overlay" onClick={onClick} />
      <div className={modalClassName}>
        <div className="modal__form">{children}</div>
      </div>
    </Modal>
  );
};

ModalLayout.propTypes = {
  modalClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  opacity: PropTypes.bool,
  bounce: PropTypes.bool,
};

ModalLayout.defaultProps = {
  opacity: false,
  bounce: false,
};
/**
 * Export
 */
export default ModalLayout;
