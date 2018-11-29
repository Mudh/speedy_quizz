// npm import
import { connect } from 'react-redux';
// composant
import Home from 'src/components/HomeMembre';

// action creators
import { setQuizStart } from '../store/reducers/quiz';
import { chooseThemeLevel } from '../store/reducers/homeMembre';
import { setStartTimer } from '../store/reducers/sideRightLog';
import { onSubmitSubscribe } from '../store/reducers/subscribeForm';

// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.loginForm.isAuthenticated,
  themes: state.homeMembre.themes,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  startQuiz: (theme, level) => {
    dispatch(setQuizStart());
    dispatch(chooseThemeLevel(theme, level));
    dispatch(setStartTimer());
  },
  setStartTimer: () => {
    dispatch(setStartTimer());
    dispatch(onSubmitSubscribe());
  },
});

// Container - connect
const HomeMembre = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// Export
export default HomeMembre;
