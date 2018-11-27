// npm import
import { connect } from 'react-redux';

// composant
import Countdown from '../components/SideRightLog/Countdown';

// action creators

// === State (données) ===
const mapStateToProps = state => ({
  timer: state.sideRightLog.timer,
  levelTimer: state.sideRightLog.levelTimer,
  extraTimer: state.sideRightLog.extraTimer,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({});

// Container - connect
const CountdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Countdown);

// Export
export default CountdownContainer;
