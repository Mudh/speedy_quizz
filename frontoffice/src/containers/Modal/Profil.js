// npm import
import { connect } from 'react-redux';

// composant
import Profil from '../../components/Modal/profil';

// action creators
import { closeModal } from '../../store/reducers/modal';
import { onSubmitProfil } from '../../store/reducers/profilForm';

// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.loginForm.isAuthenticated,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeProfil: () => {
    dispatch(closeModal('profil'));
  },
  onSubmitProfil: () => {
    dispatch(onSubmitProfil());
    dispatch(closeModal('profil'));
  },
});

// Container - connect
const ProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);

// Export
export default ProfilContainer;
