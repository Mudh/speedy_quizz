/**
 * NPM import
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components
import ModalLayout from './modalLayout';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
class Launch extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    startQuiz: PropTypes.func.isRequired,
    setThemeLevel: PropTypes.func.isRequired,
    isOpacityAnimate: PropTypes.bool.isRequired,
  };

  handleQuizStart = () => {
    const { history, startQuiz } = this.props;
    history.push('/quiz');
    startQuiz();
  };

  componentDidMount() {
    const { setThemeLevel } = this.props;
    setThemeLevel();
  }

  render() {
    const { isOpacityAnimate } = this.props;
    return (
      <ModalLayout opacity={isOpacityAnimate} modalClass="launch">
        <p>Prêt pour le Quiz ?</p>
        <div className="modal__buttons">
          <Button
            btnClass="primary"
            btnText="C'est parti !"
            onClick={this.handleQuizStart}
          />
        </div>
      </ModalLayout>
    );
  }
}

/**
 * Export
 */
export default withRouter(Launch);
