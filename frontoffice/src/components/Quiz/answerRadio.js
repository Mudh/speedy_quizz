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
const AnswerRadio = ({ done, checkTask, answer, name }) => {
  return (
    <li className="quiz__answer">
      <input type="radio" checked={done} name={name} onChange={checkTask} />
      <label className="task-label">{answer}</label>
    </li>
  );
};

// AnswerRadio.propTypes = {
//   done: PropTypes.bool.isRequired,
//   checkTask: PropTypes.func.isRequired,
// };

/**
 * Export
 */
export default AnswerRadio;
