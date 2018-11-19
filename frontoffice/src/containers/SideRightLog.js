// npm import
import { connect } from 'react-redux';

// composant
import SideRightLog from 'src/components/SideRightLog';

// action creators
import { updatePoints } from '../store/reducers/sideRightLog';

// === State (données) ===
const mapStateToProps = state => ({
  points: state.sideRightLog.points,
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
