// npm import
import { connect } from 'react-redux';

// composant
import Subscribe from '../../components/Modal/subscribe';

// action creators
import { openModal, closeModal, switchModal } from '../../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeSubscribe: () => {
    dispatch(closeModal('subscribe'));
  },
  switchToLogin: () => {
    dispatch(switchModal('subscribe', 'login'));
  },
});

// Container - connect
const SubscribeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribe);

// Export
export default SubscribeContainer;
