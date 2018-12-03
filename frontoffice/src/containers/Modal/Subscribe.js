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
  isOpacityAnimate: state.modal.opacity,
  isBounceAnimate: state.modal.bounce,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  emptyPassword: () => {
    dispatch(emptyPassword());
  },
  onSubmitSubscribe: () => {
    dispatch(onSubmitSubscribe());
    dispatch(resetAnimateModal());
  },
  closeSubscribe: () => {
    dispatch(closeModal('subscribe'));
    dispatch(emptySubscribe());
    dispatch(resetAnimateModal());
  },
  switchToLogin: () => {
    dispatch(switchModal('subscribe', 'login'));
    dispatch(emptySubscribe());
    dispatch(resetAnimateModal());
    dispatch(animateModal('opacity'));
  },
});

// Container - connect
const SubscribeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribe);

// Export
export default SubscribeContainer;
