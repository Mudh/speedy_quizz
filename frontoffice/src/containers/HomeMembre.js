// npm import
import { connect } from 'react-redux';
// composant
import Home from 'src/components/HomeMembre';

// action creators
import { chooseThemeLevel } from '../store/reducers/homeMembre';
import { resetTotalOwnedPoints } from '../store/reducers/sideRightLog';
import { openModal, animateModal } from '../store/reducers/modal';

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
    dispatch(resetTotalOwnedPoints());
    dispatch(chooseThemeLevel(theme, level));
    dispatch(animateModal('opacity'));
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
