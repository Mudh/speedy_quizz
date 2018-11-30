// npm import
import { connect } from 'react-redux';
// composant
import Home from 'src/components/HomeMembre';

// action creators
import { setQuizStart } from '../store/reducers/quiz';
import { chooseThemeLevel } from '../store/reducers/homeMembre';
import { setStartTimer } from '../store/reducers/sideRightLog';
import { openModal } from '../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({
  isScoreOpen: state.modal.score,
  isAuthenticated: state.loginForm.isAuthenticated,
  themes: state.homeMembre.themes,
  islaunchOpen: state.modal.launch,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  startQuiz: (theme, level) => {
    dispatch(setQuizStart());
    dispatch(chooseThemeLevel(theme, level));
    dispatch(setStartTimer());
    dispatch(openModal('launch'));
  },
});

// Container - connect
const HomeMembre = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// Export
export default HomeMembre;
