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
const Quiz = ({ data, step, questionNumber, nextQuestion }) => {
  const question = data.questionsList[`step${step}`][questionNumber].title;
  const answers = data.questionsList[`step${step}`][questionNumber].response;
  const totalQuestions = data.questionsList[`step${step}`].length;

  console.log('data', data, answers);

  return (
    <Layout layoutClass="quiz">
      <section className="quiz__section">
        <QuizHeader
          theme="Le système solaire"
          question={question}
          questionNumber={questionNumber + 1}
          totalQuestions={totalQuestions}
        />
        <ul className="quiz__answers">
          {answers.map(answer => (
            <AnswerRadio
              key={answer.id}
              answer={answer.response}
              onChangeNext={nextQuestion}
            />
          ))}
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
