// npm import
import { connect } from 'react-redux';

// composant
import Countdown from '../components/SideRightLog/Countdown';

// action creators
import { setCurrentTimer } from '../store/reducers/sideRightLog';

// === State (données) ===
const mapStateToProps = state => ({
  currentTimer: state.sideRightLog.currentTimer,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  setCurrentTimer: count => {
    dispatch(setCurrentTimer(count));
  },
});

// Container - connect
const CountdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Countdown);

// Export
export default CountdownContainer;
