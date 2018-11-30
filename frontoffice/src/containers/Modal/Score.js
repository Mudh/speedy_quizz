// npm import
import { connect } from 'react-redux';

// composant
import Score from '../../components/Modal/score';

// action creators
import { closeModal } from '../../store/reducers/modal';
import { userUpdateEndgame } from '../../store/reducers/sideRightLog';

// === State (données) ===
const mapStateToProps = state => ({
  totalOwnedPoints: state.sideRightLog.totalOwnedPoints,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeScore: () => {
    dispatch(closeModal('score'));
    dispatch(userUpdateEndgame());
  },
});

// Container - connect
const ScoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Score);

// Export
export default ScoreContainer;
