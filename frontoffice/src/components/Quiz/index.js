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

  handleNextQuestion = evt => {
    const {
      data,
      step,
      questionNumber,
      nextQuestion,
      nextStep,
      updateScore,
      openScore,
    } = this.props;

    // Récupération des valeurs (coeff + points de base) pour attribuer les points
    const initPoints = data.questionsList[`step${step}`][questionNumber].points;
    const stepCoeff = data.coefficient[step - 1].coeff;

    // Vérification de la réponse
    const targetId = parseInt(evt.target.id, 10);
    const isCorrectAnswer = data.questionsList[`step${step}`][
      questionNumber
    ].response.find(answer => answer.id == targetId).is_correct;

    // Ternaire pour attibuer ou non les points
    let boolScore = isCorrectAnswer ? stepCoeff * initPoints : 0;

    // Conditions en fonction des steps et des fins de steps
    if ((step === 1 || step === 2) && questionNumber === 4) {
      setTimeout(() => {
        nextStep();
        updateScore(boolScore);
      }, 300);
    } else if (step === 3 && questionNumber === 4) {
      openScore(); // Ici on arrive à la fin du quiz donc on ouvre la modale de score
    } else {
      setTimeout(() => {
        nextQuestion();
        updateScore(boolScore);
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
                id={answer.id}
                answer={answer.response}
                name={question}
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
