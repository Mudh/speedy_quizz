// npm import
import { connect } from 'react-redux';

// composant
import Quiz from 'src/components/Quiz';

// action creators
import { nextQuestion, nextStep, answerValue } from '../store/reducers/quiz';
import { updatePoints } from '../store/reducers/sideRightLog';
import { openModal } from '../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({
  data: state.quiz.data,
  step: state.quiz.step,
  questionNumber: state.quiz.questionNumber,
  answerValue: state.quiz.answerValue,
  isScoreOpen: state.modal.score,
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
});

// Container - connect
const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quiz);

// Export
export default QuizContainer;
