// npm import
import { connect } from 'react-redux';

// composant
import AddQuestion from '../../components/Modal/addQuestion';

// action creators
import { closeModal } from '../../store/reducers/modal';
import { fakeAuth } from '../../store/reducers/loginForm';

// === State (données) ===
const mapStateToProps = state => ({
  fakeAuth: state.loginForm.fakeAuth,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeAddQuestion: () => {
    dispatch(closeModal('addQuestion'));
  },
  onSubmitAddQuestion: () => {
    // dispatch(onSubmitAddQuestion());
    dispatch(closeModal('addQuestion'));
    dispatch(fakeAuth());
  },
});

// Container - connect
const AddQuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddQuestion);

// Export
export default AddQuestionContainer;
