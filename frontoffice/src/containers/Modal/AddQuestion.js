// npm import
import { connect } from 'react-redux';

// composant
import AddQuestion from '../../components/Modal/addQuestion';

// action creators
import { closeModal, resetAnimateModal } from '../../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.loginForm.isAuthenticated,
  isBounceAnimate: state.modal.bounce,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeAddQuestion: () => {
    dispatch(closeModal('addQuestion'));
    dispatch(resetAnimateModal());
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
