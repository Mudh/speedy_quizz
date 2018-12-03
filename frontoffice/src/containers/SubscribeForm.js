// npm import
import { connect } from 'react-redux';

// composant
import SubscribeForm from '../components/Form/SubscribeForm';

// action creators
import {
  onChangeInput,
  onSubmitSubscribe,
} from '../store/reducers/subscribeForm';
import { closeModal } from '../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({
  lastname: state.subscribeForm.lastname,
  firstname: state.subscribeForm.firstname,
  username: state.subscribeForm.username,
  email: state.subscribeForm.email,
  password: state.subscribeForm.password,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  onSubmitSubscribe: () => {
    dispatch(closeModal('login'));
    dispatch(onSubmitSubscribe());
  },
  onChangeInput: (name, value) => {
    dispatch(onChangeInput(name, value));
  },
});

// Container - connect
const SubscribeFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubscribeForm);

// Export
export default SubscribeFormContainer;
