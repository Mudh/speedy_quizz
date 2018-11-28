// npm import
import { connect } from 'react-redux';

// composant
import AddQuestion from '../../components/Modal/addQuestion';

// action creators
import { closeModal } from '../../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.loginForm.isAuthenticated,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeAddQuestion: () => {
    dispatch(closeModal('addQuestion'));
  },
  onSubmitAddQuestion: () => {
    // dispatch(onSubmitAddQuestion());
    dispatch(closeModal('addQuestion'));
  },
});

// Container - connect
const AddQuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddQuestion);

// Export
export default AddQuestionContainer;
