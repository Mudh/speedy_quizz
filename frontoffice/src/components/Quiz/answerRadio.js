/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components

// Styles
import './quiz.scss';

/**
 * Code
 */
const AnswerRadio = ({ id, onChangeNext, answer, name }) => {
  return (
    <li className="quiz__answer">
      <input type="radio" id={id} name={name} onChange={onChangeNext} />
      <label className="task-label">{answer}</label>
    </li>
  );
};

AnswerRadio.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChangeNext: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default AnswerRadio;
