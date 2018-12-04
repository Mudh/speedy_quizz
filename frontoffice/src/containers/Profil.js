// npm import
import { connect } from 'react-redux';

// composant
import Profil from 'src/components/Profil';

import { openModal, animateModal } from '../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.loginForm.isAuthenticated,
  isProfilOpen: state.modal.profil,
  isAddQuestionOpen: state.modal.addQuestion,
  firstname: state.sideRightLog.firstname,
  lastname: state.sideRightLog.lastname,
  username: state.sideRightLog.username,
  email: state.sideRightLog.email,
  description: state.sideRightLog.description,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  openProfil: () => {
    dispatch(animateModal('bounce'));
    dispatch(openModal('profil'));
  },
  openAddQuestion: () => {
    dispatch(animateModal('bounce'));
    dispatch(openModal('addQuestion'));
  },
});

// Container - connect
const ProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);

export default ProfilContainer;
