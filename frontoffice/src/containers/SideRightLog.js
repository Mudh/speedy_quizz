// npm import
import { connect } from 'react-redux';

// composant
import SideRightLog from 'src/components/SideRightLog';

// action creators
import { updatePoints } from '../store/reducers/sideRightLog';

// === State (données) ===
const mapStateToProps = state => ({
  parties: state.sideRightLog.parties,
  points: state.sideRightLog.points,
  skip: state.sideRightLog.skip,
  revive: state.sideRightLog.revive,
  timer: state.sideRightLog.timer,
  fiftyFifty: state.sideRightLog.fiftyFifty,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({});

// Container - connect
const SideRightLogContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideRightLog);

// Export
export default SideRightLogContainer;
