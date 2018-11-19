/**
 * NPM import
 */
import React from 'react';
import ReactDOM from 'react-dom';
/**
 * Local import
 */
// Components

// Styles
import './modal.scss';

// Ici on cible l'élément div avec l'id "modal-root"
// dans le fichier index.html
const modalRoot = document.getElementById('modal-root');
/**
 * Code
 */
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalContainer = document.createElement('div');
    this.modalContainer.className = 'modal';
  }

  componentDidMount() {
    modalRoot.appendChild(this.modalContainer);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.modalContainer);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.modalContainer);
  }
}
/**
 * Export
 */
export default Modal;
