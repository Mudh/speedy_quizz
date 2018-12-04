// npm import
import { connect } from 'react-redux';

// composant
import LoginForm from '../components/Form/LoginForm';

// action creators
import { onChangeInput, onSubmitLogin } from '../store/reducers/loginForm';
import { closeModal } from '../store/reducers/modal';
import { removeSuccess, emptySubscribe } from '../store/reducers/subscribeForm';
import { emptyLogin } from '../store/reducers/loginForm';

// === State (données) ===
const mapStateToProps = state => ({
  email: state.loginForm.email,
  password: state.loginForm.password,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  onSubmitLogin: () => {
    dispatch(onSubmitLogin());
    dispatch(removeSuccess());
    dispatch(closeModal('login'));
    dispatch(emptyLogin());
    dispatch(emptySubscribe());
  },
  onChangeInput: (name, value) => {
    dispatch(onChangeInput(name, value));
  },
});

// Container - connect
const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

// Export
export default LoginFormContainer;
