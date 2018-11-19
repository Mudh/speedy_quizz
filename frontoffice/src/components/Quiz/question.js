/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './quiz.scss';

/**
 * Code
 */
const Question = ({ question }) => {
  return <p className="quiz__question">{question}</p>;
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Question;
