// npm import
import { connect } from 'react-redux';

// composant
import ProfilForm from '../components/Form/ProfilForm';

// action creators
import { closeModal } from '../store/reducers/modal';
import { onChangeProfil, onSubmitProfil } from '../store/reducers/profilForm';

// === State (données) ===
const mapStateToProps = state => ({
  firstname: state.profilForm.firstname,
  lastname: state.profilForm.lastname,
  username: state.profilForm.username,
  email: state.profilForm.email,
  description: state.profilForm.description,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  onSubmitProfil: () => {
    dispatch(onSubmitProfil());
    dispatch(closeModal('profil'));
  },
  onChangeProfil: (name, value) => {
    dispatch(onChangeProfil(name, value));
  },
});

// Container - connect
const ProfilFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilForm);

// Export
export default ProfilFormContainer;
