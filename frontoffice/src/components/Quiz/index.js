/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import Layout from '../Layout';
import Button from '../Button';
// Styles
import './quiz.scss';

/**
 * Code
 */
const Quiz = ({ done, checkTask }) => {
  return (
    <Layout layoutClass="quiz">
      <section className="quiz__section">
        <h1 className="quiz__title">La grammaire anglaise</h1>
        <p className="quiz__question">
          Sous quel forme le preterit se présente t’il à la fin d’un verbe ?
        </p>
        <span className="quiz__breadcrumb">question 1 sur 2</span>
        <ul className="quiz__answers">
          <li className="quiz__answer">
            <input
              type="radio"
              checked={done}
              name="question_1"
              onChange={checkTask}
            />
            <label className="task-label">
              On met “ing” à la fin du verbe. Ex: “Playing”
            </label>
          </li>
          <li className="quiz__answer">
            <input
              type="radio"
              checked={done}
              name="question_1"
              onChange={checkTask}
            />
            <label className="task-label">
              On met “ed” à la fin du verbe. Ex: “Played”
            </label>
          </li>
        </ul>
      </section>
      <footer className="quiz__footer">
        <Button btnClass="stop" btnText="STOP" />
      </footer>
    </Layout>
  );
};

// Quiz.propTypes = {
//   done: PropTypes.bool.isRequired,
//   checkTask: PropTypes.func.isRequired,
// };

/**
 * Export
 */
export default Quiz;
