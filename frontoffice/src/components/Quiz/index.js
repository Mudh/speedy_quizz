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
// Utils
import { shuffle } from '../../utils';

// Components
import Button from '../Button';
import QuizHeader from './quizHeader';
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
      onChangeAnswer,
      setQuizStop,
      looseAllPoints,
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
        setQuizStop();
      }, 150);
    } else if (!isCorrectAnswer) {
      setTimeout(() => {
        updateScore(boolScore);
        looseAllPoints();
        setQuizStop();
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
      setQuizStop,
      looseAllPoints,
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
    } else if (!isCorrectAnswer) {
      setTimeout(() => {
        looseAllPoints();
        setQuizStop();
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
    const { setJokerRevive, resetOwnedPoints } = this.props;
    setJokerRevive();
    resetOwnedPoints();
  };

  handleFiftyFiftyjoker = () => {
    const { setJokerFiftyFifty, questionNumber } = this.props;
    setJokerFiftyFifty(questionNumber);
  };

  handleTimerJoker = () => {
    const { setEndTimer, setJokerTimer } = this.props;
    setEndTimer();
    setJokerTimer();
  };

  componentDidUpdate(nextProps) {
    const { fiftyFifty, questionNumber } = this.props;
    return (
      fiftyFifty.used !== nextProps.fiftyFifty.used ||
      (fiftyFifty.used &&
        questionNumber !== (nextProps.questionNumber === questionNumber + 1))
    );
  }

  render() {
    const {
      data,
      step,
      questionNumber,
      isScoreOpen,
      answerValue,
      skip,
      revive,
      timer,
      fiftyFifty,
      filteredQuestion,
      isQuizStart,
      setQuizStop,
      totalOwnedPoints,
    } = this.props;
    if (data.questionsList === undefined || !isQuizStart)
      return <Redirect to="/" />;

    const question = data.questionsList[`step${step}`][questionNumber].title;

    const filteredGoodAnswer = data.questionsList.step2[
      questionNumber
    ].response.filter(item => item.is_correct === true);

    const filteredBadAnswer = shuffle(
      data.questionsList.step2[questionNumber].response.filter(
        item => item.is_correct === false,
      ),
    );

    const jokerFilteredArray = shuffle([
      ...filteredGoodAnswer,
      filteredBadAnswer[0],
    ]);

    const toggleStep2responses =
      fiftyFifty.used && filteredQuestion === questionNumber
        ? jokerFilteredArray
        : data.questionsList[`step${step}`][questionNumber].response;

    const totalQuestions = data.questionsList[`step${step}`].length;
    const answers =
      step !== 2
        ? data.questionsList[`step${step}`][questionNumber].response
        : toggleStep2responses;

    const score = isScoreOpen ? <Score /> : null;

    const jokersClassNames = jokerObj =>
      classNames('primary round', {
        isDisabled: jokerObj.used || jokerObj.count === 0,
      });

    const fiftyClassNames = classNames('primary round', {
      isDisabled: fiftyFifty.used || fiftyFifty.count === 0 || step !== 2,
    });

    return (
      <Layout layoutClass="quiz">
        <section className="quiz__section">
          <QuizHeader
            theme="Le système solaire"
            step={step}
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
          <Button btnClass="stop" btnText="STOP" onClick={setQuizStop} />
          <Button
            btnClass={fiftyClassNames}
            onClick={this.handleFiftyFiftyjoker}
          >
            <FiftyFifty />
          </Button>
          <Button
            btnClass={jokersClassNames(timer)}
            onClick={this.handleTimerJoker}
          >
            <Timer />
          </Button>
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
