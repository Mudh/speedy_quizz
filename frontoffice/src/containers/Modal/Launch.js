// npm import
import { connect } from 'react-redux';

// composant
import Launch from '../../components/Modal/launch';

// action creators
import { closeModal } from '../../store/reducers/modal';
import { setQuizStart } from '../../store/reducers/quiz';
import { setStartTimer } from '../../store/reducers/sideRightLog';
import { setThemeLevel } from '../../store/reducers/homeMembre';

// === State (données) ===
const mapStateToProps = state => ({
  isOpacityAnimate: state.modal.opacity,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeLaunch: () => {
    dispatch(closeModal('launch'));
  },
  startQuiz: () => {
    dispatch(setQuizStart());
    dispatch(setStartTimer());
    dispatch(closeModal('launch'));
  },
  setThemeLevel: () => {
    dispatch(setThemeLevel());
  },
});

// Container - connect
const LaunchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Launch);

// Export
export default LaunchContainer;
