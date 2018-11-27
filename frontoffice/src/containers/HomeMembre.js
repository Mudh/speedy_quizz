// npm import
import { connect } from 'react-redux';
// composant
import Home from 'src/components/HomeMembre';

// action creators
import { setQuizStart } from '../store/reducers/quiz';
import { sendRequest } from '../store/reducers/homeMembre';
import { setStartTimer } from '../store/reducers/sideRightLog';
import { onSubmitSubscribe } from '../store/reducers/subscribeForm';

// === State (données) ===
const mapStateToProps = state => ({
  fakeAuth: state.loginForm.fakeAuth,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  startQuiz: () => {
    dispatch(setQuizStart());
    dispatch(sendRequest());
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