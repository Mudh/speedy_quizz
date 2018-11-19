// npm import
import { connect } from 'react-redux';

// composant
import Quiz from 'src/components/Quiz';

// action creators

// === State (données) ===
const mapStateToProps = state => ({
  data: state.quiz.data,
});

// === Dispatch (actions) ===
const mapDispatchToProps = () => ({});

// Container - connect
const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quiz);

// Export
export default QuizContainer;
