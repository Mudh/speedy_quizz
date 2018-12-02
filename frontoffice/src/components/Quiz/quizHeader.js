/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import Question from './question';
// Styles
import './quiz.scss';

/**
 * Code
 */
const QuizHeader = ({
  theme,
  question,
  questionNumber,
  totalQuestions,
  step,
}) => {
  return (
    <header>
      <h1 className="quiz__title">{theme}</h1>
      <Question question={question} />
      <span className="quiz__breadcrumb">
        Etape {step} - Question {questionNumber} sur {totalQuestions}
      </span>
    </header>
  );
};

QuizHeader.propTypes = {
  theme: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  questionNumber: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

/**
 * Export
 */
export default QuizHeader;
