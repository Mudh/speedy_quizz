// npm import
import { connect } from 'react-redux';

// composant
import Quiz from 'src/components/Quiz';

// action creators
import {
  nextQuestion,
  nextStep,
  answerValue,
  resetQuestion,
} from '../store/reducers/quiz';
import {
  updatePoints,
  updateJokerCount,
  resetOwnedPoints,
  setJokerRevive,
  setJokerFifty,
  setEndTimer,
  setJokerTimer,
} from '../store/reducers/sideRightLog';
import { openModal } from '../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({
  data: state.quiz.data,
  step: state.quiz.step,
  questionNumber: state.quiz.questionNumber,
  answerValue: state.quiz.answerValue,
  isScoreOpen: state.modal.score,
  fakeAuth: state.loginForm.fakeAuth,
  skip: state.sideRightLog.skip,
  revive: state.sideRightLog.revive,
  timer: state.sideRightLog.timer,
  fiftyFifty: state.sideRightLog.fiftyFifty,
  ownedPoints: state.sideRightLog.ownedPoints,
  filteredQuestion: state.sideRightLog.filteredQuestion,
  startTimer: state.sideRightLog.startTimer,
  endTimer: state.sideRightLog.endTimer,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  nextStep: () => {
    dispatch(nextStep());
  },
  nextQuestion: () => {
    dispatch(nextQuestion());
  },
  onChangeAnswer: textValue => {
    dispatch(answerValue(textValue));
  },
  updateScore: scoreValue => {
    dispatch(updatePoints(scoreValue));
  },
  openScore: () => {
    dispatch(openModal('score'));
  },
  updateSkipCount: () => {
    dispatch(updateJokerCount('skip'));
  },
  setJokerRevive: () => {
    dispatch(updateJokerCount('revive'));
    dispatch(setJokerRevive());
    dispatch(resetQuestion());
  },
  setJokerFiftyFifty: question => {
    dispatch(updateJokerCount('fiftyFifty'));
    dispatch(setJokerFifty(question));
  },
  resetOwnedPoints: () => {
    dispatch(resetOwnedPoints());
  },
  setEndTimer: endValue => {
    dispatch(setEndTimer(endValue));
  },
  setJokerTimer: question => {
    dispatch(updateJokerCount('timer'));
    dispatch(setJokerTimer(question));
  },
});

// Container - connect
const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quiz);

// Export
export default QuizContainer;
