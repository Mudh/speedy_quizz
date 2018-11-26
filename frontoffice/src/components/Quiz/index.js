/**
 * NPM import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */
// Components
import Button from '../Button';
import QuizHeader from './QuizHeader';
import AnswerRadio from './answerRadio';
import Layout from '../../containers/Layout';
import Score from '../../containers/Modal/Score';
import FiftyFifty from 'src/components/Icons/sidebar/fiftyFifty';
import Revive from 'src/components/Icons/sidebar/revive';
import Skip from 'src/components/Icons/sidebar/skip';
import Timer from 'src/components/Icons/sidebar/timer';

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
      resetOwnedPoints,
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
        resetOwnedPoints();
      }, 150);
    } else {
      setTimeout(() => {
        nextQuestion();
        updateScore(boolScore);
      }, 150);
    }
  };

  handleSkipJoker = () => {
    const {
      step,
      questionNumber,
      nextQuestion,
      nextStep,
      openScore,
      updateSkipCount,
    } = this.props;

    if (questionNumber === 4 && step !== 3) {
      setTimeout(() => {
        nextStep();
        updateSkipCount();
      }, 150);
    } else if (questionNumber === 4 && step === 3) {
      setTimeout(() => {
        updateSkipCount();
        openScore();
      }, 150);
    } else {
      setTimeout(() => {
        nextQuestion();
        updateSkipCount();
      }, 150);
    }
  };

  handleRevivejoker = () => {
    const { setJokerRevive, resetOwnedPoints, updateReviveCount } = this.props;
    updateReviveCount();
    setJokerRevive();
    resetOwnedPoints();
  };

  render() {
    const {
      data,
      step,
      questionNumber,
      isScoreOpen,
      answerValue,
      fakeAuth,
      updateReviveCount,
      updateTimerCount,
      updateFiftyFityCount,
      skip,
      revive,
      timer,
      fiftyFifty,
      ownedPoints,
    } = this.props;
    const question = data.questionsList[`step${step}`][questionNumber].title;
    const answers = data.questionsList[`step${step}`][questionNumber].response;
    const totalQuestions = data.questionsList[`step${step}`].length;

    const score = isScoreOpen ? <Score /> : null;

    const jokersClassNames = jokerUseValue =>
      classNames('primary round', {
        isDisabled: jokerUseValue.used || jokerUseValue.count === 0,
      });

    console.log('points gagnés', ownedPoints, data);

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
          <Button
            btnClass={jokersClassNames(skip)}
            onClick={this.handleSkipJoker}
          >
            <Skip />
          </Button>
          <Button
            btnClass={jokersClassNames(revive)}
            onClick={this.handleRevivejoker}
          >
            <Revive />
          </Button>
          <Button btnClass="stop" btnText="STOP" />
          <Button
            btnClass={jokersClassNames(fiftyFifty)}
            onClick={updateFiftyFityCount}
          >
            <FiftyFifty />
          </Button>
          <Button btnClass={jokersClassNames(timer)} onClick={updateTimerCount}>
            <Timer />
          </Button>
        </footer>
        {score}
        {!fakeAuth && <Redirect to="/" />}
      </Layout>
    );
  }
}

/**
 * Export
 */
export default Quiz;
