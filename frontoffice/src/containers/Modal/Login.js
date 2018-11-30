// npm import
import { connect } from 'react-redux';

// composant
import Login from '../../components/Modal/login';

// action creators
import { closeModal, switchModal } from '../../store/reducers/modal';
import { onSubmitLogin } from '../../store/reducers/loginForm';
import {
  removeSuccess,
  emptySubscribe,
} from '../../store/reducers/subscribeForm';
import { emptyLogin } from '../../store/reducers/loginForm';

// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.loginForm.isAuthenticated,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeLogin: () => {
    dispatch(removeSuccess());
    dispatch(closeModal('login'));
    dispatch(emptyLogin());
    dispatch(emptySubscribe());
  },
  switchToSubscribe: () => {
    dispatch(switchModal('login', 'subscribe'));
  },
  onSubmitLogin: () => {
    dispatch(onSubmitLogin());
    dispatch(removeSuccess());
    dispatch(closeModal('login'));
    dispatch(emptyLogin());
    dispatch(emptySubscribe());
  },
});

// Container - connect
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// Export
export default LoginContainer;
