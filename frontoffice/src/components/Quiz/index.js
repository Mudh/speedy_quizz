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
import Score from '../../containers/Modal/Score';

// Styles
import './quiz.scss';

/**
 * Code
 */
class Quiz extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  handleNextQuestion = () => {
    const {
      data,
      step,
      questionNumber,
      nextQuestion,
      nextStep,
      updateScore,
      openScore,
    } = this.props;

    const initPoints = data.questionsList[`step${step}`][questionNumber].points;
    const stepCoeff = data.coefficient[step - 1].coeff;

    if ((step === 1 || step === 2) && questionNumber === 4) {
      setTimeout(() => {
        nextStep();
        updateScore(stepCoeff * initPoints);
      }, 300);
    } else if (step === 3 && questionNumber === 4) {
      openScore();
    } else {
      setTimeout(() => {
        nextQuestion();
        updateScore(stepCoeff * initPoints);
      }, 300);
    }
  };

  render() {
    const { data, step, questionNumber, isScoreOpen } = this.props;
    const question = data.questionsList[`step${step}`][questionNumber].title;
    const answers = data.questionsList[`step${step}`][questionNumber].response;
    const totalQuestions = data.questionsList[`step${step}`].length;

    const score = isScoreOpen ? <Score /> : null;

    console.log('data', data);

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
                onChangeNext={this.handleNextQuestion}
              />
            ))}
          </ul>
        </section>
        <footer className="quiz__footer">
          <Button btnClass="stop" btnText="STOP" />
        </footer>
        {score}
      </Layout>
    );
  }
}

/**
 * Export
 */
export default Quiz;
