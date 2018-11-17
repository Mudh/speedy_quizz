// npm import
import { connect } from 'react-redux';

// composant
import Login from '../../components/Modal/login';

// action creators
import { closeModal } from '../../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeLogin: () => {
    dispatch(closeModal('login'));
  },
});

// Container - connect
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// Export
export default LoginContainer;
