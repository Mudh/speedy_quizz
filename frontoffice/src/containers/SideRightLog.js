// npm import
import { connect } from 'react-redux';

// composant
import SideRightLog from 'src/components/SideRightLog';

// action creators
import { updateJokerCount } from '../store/reducers/sideRightLog';

// === State (données) ===
const mapStateToProps = state => ({
  firstname: state.sideRightLog.firstname,
  parties: state.sideRightLog.parties,
  totalPoints: state.sideRightLog.totalPoints,
  skip: state.sideRightLog.skip,
  revive: state.sideRightLog.revive,
  timer: state.sideRightLog.timer,
  fiftyFifty: state.sideRightLog.fiftyFifty,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  updateSkipCount: () => {
    dispatch(updateJokerCount('skip'));
  },
  updateReviveCount: () => {
    dispatch(updateJokerCount('revive'));
  },
  updateTimerCount: () => {
    dispatch(updateJokerCount('timer'));
  },
  updateFiftyFityCount: () => {
    dispatch(updateJokerCount('fiftyFifty'));
  },
});

// Container - connect
const SideRightLogContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideRightLog);

// Export
export default SideRightLogContainer;
