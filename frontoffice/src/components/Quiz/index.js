/**
 * NPM import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import Button from '../Button';
import QuizHeader from './QuizHeader';
import AnswerRadio from './answerRadio';
import Layout from '../../containers/Layout';
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

  // Handler de changement de valeur de l'input texte
  handleChangeAnswer = evt => {
    const valueInput = evt.target.value;
    const { onChangeAnswer } = this.props;
    onChangeAnswer(valueInput);
  };

  // Handler de validation sur un réponse input texte
  handleSubmitAnswer = evt => {
    evt.preventDefault();
    const {
      data,
      answerValue,
      questionNumber,
      nextQuestion,
      updateScore,
      openScore,
      onChangeAnswer,
    } = this.props;

    // Récupération des valeurs (coeff + points de base) pour attribuer les points
    const initPoints = data.questionsList.step3[questionNumber].points;
    const stepCoeff = data.coefficient[2].coeff;

    // Vérification de la réponse
    const answer =
      data.questionsList.step3[questionNumber].response[0].response;
    const isCorrectAnswer = answerValue.toLowerCase() === answer.toLowerCase();

    // Ternaire pour attibuer ou non les points
    let boolScore = isCorrectAnswer ? stepCoeff * initPoints : 0;

    if (questionNumber === 4) {
      setTimeout(() => {
        onChangeAnswer('');
        updateScore(boolScore);
        openScore();
      }, 150);
    } else {
      setTimeout(() => {
        onChangeAnswer('');
        nextQuestion();
        updateScore(boolScore);
      }, 150);
    }
  };

  // Handler de validation sur un réponse input radio
  handleNextQuestion = evt => {
    const {
      data,
      step,
      questionNumber,
      nextQuestion,
      nextStep,
      updateScore,
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

    // Conditions en fonction des questions de fin de step
    if (questionNumber === 4) {
      setTimeout(() => {
        nextStep();
        updateScore(boolScore);
      }, 150);
    } else {
      setTimeout(() => {
        nextQuestion();
        updateScore(boolScore);
      }, 150);
    }
  };

  render() {
    const {
      data,
      step,
      questionNumber,
      isScoreOpen,
      answerValue,
      fakeAuth,
    } = this.props;
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
          <form className="quiz__form" onSubmit={this.handleSubmitAnswer}>
            {step !== 3 && (
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
            )}
            {step === 3 && (
              <fieldset>
                <input
                  className="quiz__answer quiz__answer--text"
                  type="text"
                  autoComplete="off"
                  value={answerValue}
                  placeholder="Entrez votre réponse puis appuyez sur la touche entrée"
                  onChange={this.handleChangeAnswer}
                />
              </fieldset>
            )}
          </form>
        </section>
        <footer className="quiz__footer">
          <Button btnClass="stop" btnText="STOP" />
        </footer>
        {score}
        {!fakeAuth && <Redirect to="/loggued" />}
      </Layout>
    );
  }
}

/**
 * Export
 */
export default Quiz;
