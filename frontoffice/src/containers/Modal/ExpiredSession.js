// npm import
import { connect } from 'react-redux';

// composant
import ExpiredSession from '../../components/Modal/expiredSession';

// action creators
import { openModal, closeModal } from '../../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeExpired: () => {
    dispatch(closeModal('expired'));
  },
  openLogin: () => {
    dispatch(openModal('login'));
    dispatch(closeModal('expired'));
  },
});

// Container - connect
const ExpiredSessionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpiredSession);

// Export
export default ExpiredSessionContainer;
