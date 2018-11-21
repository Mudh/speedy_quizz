// npm import
import { connect } from 'react-redux';

// composant
import Login from '../../components/Modal/login';

// action creators
import { closeModal, switchModal } from '../../store/reducers/modal';
import { onSubmitLogin } from '../../store/reducers/loginForm';

// === State (données) ===
const mapStateToProps = state => ({});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeLogin: () => {
    dispatch(closeModal('login'));
  },
  switchToSubscribe: () => {
    dispatch(switchModal('login', 'subscribe'));
  },
  onSubmitLogin: () => {
    dispatch(onSubmitLogin());
  },
});

// Container - connect
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// Export
export default LoginContainer;
