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
    const { closeLaunch } = this.props;
    return (
      <ModalLayout modalClass="launch">
        <p>Prêt pour le Quiz ?</p>
        <div className="modal__buttons">
          <Button
            btnClass="primary"
            btnText="C'est parti !"
            onClick={this.handleQuizStart}
          />
          <Button
            btnClass="primary"
            btnText="Mmmh pas encore..."
            onClick={closeLaunch}
          />
        </div>
      </ModalLayout>
    );
  }
}

Launch.propTypes = {
  closeLaunch: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default withRouter(Launch);
