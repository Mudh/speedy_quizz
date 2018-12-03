// npm import
import { connect } from 'react-redux';

// composant
import Countdown from '../components/SideRightLog/Countdown';

// action creators
import { setQuizStop } from '../store/reducers/quiz';
import { looseAllPoints } from '../store/reducers/sideRightLog';
import { openModal, animateModal } from '../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({
  isQuizStart: state.quiz.isQuizStart,
  timer: state.sideRightLog.timer,
  levelTimer: state.sideRightLog.levelTimer,
  extraTimer: state.sideRightLog.extraTimer,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  setQuizStop: () => {
    dispatch(setQuizStop());
    dispatch(looseAllPoints());
    dispatch(animateModal('bounce'));
    dispatch(openModal('score'));
  },
});

// Container - connect
const CountdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Countdown);

// Export
export default CountdownContainer;
