// npm import
import { connect } from 'react-redux';

// composant
import Profil from 'src/components/Profil';

// Actions creators
import { disconnect } from '../store/reducers/loginForm';
import { openModal } from '../store/reducers/modal';

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
  onClickDisconnect: () => {
    dispatch(disconnect());
  },
  openProfil: () => {
    dispatch(openModal('profil'));
  },
  openAddQuestion: () => {
    dispatch(openModal('addQuestion'));
  },
});

// Container - connect
const ProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);

// Export
// Ici exceptionnelement avec 'withRouter'
// car les profilLinks ne s'auto update pas lorqu'ils sont connectés au store
// et n'appliquent pas la classe css 'is-selected'
// https://github.com/ReactTraining/react-router/issues/4638

export default ProfilContainer;
