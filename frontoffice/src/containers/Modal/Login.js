// npm import
import { connect } from 'react-redux';

// composant
import Login from '../../components/Modal/login';

// action creators
import {
  closeModal,
  switchModal,
  resetAnimateModal,
  animateModal,
} from '../../store/reducers/modal';
import { onSubmitLogin } from '../../store/reducers/loginForm';
import {
  removeSuccess,
  emptySubscribe,
} from '../../store/reducers/subscribeForm';
import { emptyLogin } from '../../store/reducers/loginForm';

// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.loginForm.isAuthenticated,
  isOpacityAnimate: state.modal.opacity,
  isBounceAnimate: state.modal.bounce,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeLogin: () => {
    dispatch(removeSuccess());
    dispatch(closeModal('login'));
    dispatch(emptyLogin());
    dispatch(emptySubscribe());
    dispatch(resetAnimateModal());
  },
  switchToSubscribe: () => {
    dispatch(emptyLogin());
    dispatch(emptySubscribe());
    dispatch(resetAnimateModal());
    dispatch(switchModal('login', 'subscribe'));
    dispatch(animateModal('opacity'));
  },
  onSubmitLogin: () => {
    dispatch(onSubmitLogin());
    dispatch(removeSuccess());
    dispatch(closeModal('login'));
    dispatch(emptyLogin());
    dispatch(emptySubscribe());
    dispatch(resetAnimateModal());
  },
});

// Container - connect
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// Export
export default LoginContainer;
