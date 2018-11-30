// npm import
import { connect } from 'react-redux';

// composant
import Score from '../../components/Modal/score';

// action creators
import { closeModal } from '../../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({
  totalOwnedPoints: state.sideRightLog.totalOwnedPoints,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeScore: () => {
    dispatch(closeModal('score'));
  },
});

// Container - connect
const ScoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Score);

// Export
export default ScoreContainer;
