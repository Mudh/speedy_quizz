// npm import
import { connect } from 'react-redux';

// composant
import Quiz from 'src/components/Quiz';

// action creators
import { nextQuestion } from '../store/reducers/quiz';

// === State (données) ===
const mapStateToProps = state => ({
  data: state.quiz.data,
  step: state.quiz.step,
  questionNumber: state.quiz.questionNumber,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  nextQuestion: () => {
    dispatch(nextQuestion());
  },
});

// Container - connect
const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quiz);

// Export
export default QuizContainer;
