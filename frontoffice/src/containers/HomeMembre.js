// npm import
import { connect } from 'react-redux';

// composant
import Home from 'src/components/HomeMembre';

// action creators
import { sendRequest } from '../store/reducers/homeMembre';
import { setStartTimer } from '../store/reducers/sideRightLog';

// === State (données) ===
const mapStateToProps = state => ({
  fakeAuth: state.loginForm.fakeAuth,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  sendRequest: () => {
    dispatch(sendRequest());
  },
  setStartTimer: () => {
    dispatch(setStartTimer());
  },
});

// Container - connect
const HomeMembre = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// Export
export default HomeMembre;
