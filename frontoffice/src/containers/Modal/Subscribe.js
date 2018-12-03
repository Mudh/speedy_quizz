// npm import
import { connect } from 'react-redux';

// composant
import Subscribe from '../../components/Modal/subscribe';

// action creators
import {
  closeModal,
  switchModal,
  resetAnimateModal,
  animateModal,
} from '../../store/reducers/modal';
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
    dispatch(resetAnimateModal());
    dispatch(onSubmitSubscribe());
    dispatch(animateModal('opacity'));
  },
  closeSubscribe: () => {
    dispatch(closeModal('subscribe'));
    dispatch(emptySubscribe());
    dispatch(resetAnimateModal());
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
