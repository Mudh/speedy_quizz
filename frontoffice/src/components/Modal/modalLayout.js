/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
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
const ModalLayout = ({ modalClass, onClick, children }) => (
  <Modal>
    <span className="modal__overlay" onClick={onClick} />
    <div className={`modal__wrapper modal__${modalClass}`}>
      <div className="modal__form">{children}</div>
    </div>
  </Modal>
);

ModalLayout.propTypes = {
  modalClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
/**
 * Export
 */
export default ModalLayout;
