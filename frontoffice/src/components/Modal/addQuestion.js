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
import AddQuestionForm from '../Form/AddQuestionForm';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
const AddQuestion = ({
  closeAddQuestion,
  onSubmitAddQuestion,
  isBounceAnimate,
}) => (
  <ModalLayout
    bounce={isBounceAnimate}
    modalClass="add-question"
    onClick={closeAddQuestion}
  >
    <Button btnClass="close" btnText="+" onClick={closeAddQuestion} />
    <AddQuestionForm />
    <Button
      btnClass="primary"
      btnText="valider"
      onClick={onSubmitAddQuestion}
    />
  </ModalLayout>
);

AddQuestion.propTypes = {
  closeAddQuestion: PropTypes.func.isRequired,
  onSubmitAddQuestion: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default AddQuestion;
