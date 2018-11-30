// npm import
import { connect } from 'react-redux';

// composant
import Subscribe from '../../components/Modal/subscribe';

// action creators
import { closeModal, switchModal } from '../../store/reducers/modal';
import {
  onSubmitSubscribe,
  emptyPassword,
  emptySubscribe,
} from '../../store/reducers/subscribeForm';

// === State (données) ===
const mapStateToProps = state => ({
  isSubscribeSuccess: state.subscribeForm.success,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  emptyPassword: () => {
    dispatch(emptyPassword());
  },
  onSubmitSubscribe: () => {
    dispatch(onSubmitSubscribe());
  },
  closeSubscribe: () => {
    dispatch(closeModal('subscribe'));
    dispatch(emptySubscribe());
  },
  switchToLogin: () => {
    dispatch(switchModal('subscribe', 'login'));
    dispatch(emptySubscribe());
  },
});

// Container - connect
const SubscribeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribe);

// Export
export default SubscribeContainer;
