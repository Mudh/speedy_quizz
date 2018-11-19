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
import QuizHeader from './QuizHeader';
import AnswerRadio from './answerRadio';
// Styles
import './quiz.scss';

/**
 * Code
 */
const Quiz = ({ data }) => {
  console.log('data', data);
  return (
    <Layout layoutClass="quiz">
      <section className="quiz__section">
        <QuizHeader
          theme="Le système solaire"
          question="Sous quel forme le preterit se présente t’il à la fin d’un verbe ?"
          questionNumber={1}
          totalQuestions={5}
        />
        <ul className="quiz__answers">
          <AnswerRadio answer="On met “ing” à la fin du verbe. Ex: “Playing”" />
          <AnswerRadio answer="On met “ed” à la fin du verbe. Ex: “Played”" />
        </ul>
      </section>
      <footer className="quiz__footer">
        <Button btnClass="stop" btnText="STOP" />
      </footer>
    </Layout>
  );
};

Quiz.propTypes = {
  data: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default Quiz;
