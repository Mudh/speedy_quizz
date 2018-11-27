// npm import
import { connect } from 'react-redux';

// composant
import Profil from '../../components/Modal/profil';

// action creators
import { closeModal } from '../../store/reducers/modal';
import { fakeAuth } from '../../store/reducers/loginForm';

// === State (données) ===
const mapStateToProps = state => ({
  fakeAuth: state.loginForm.fakeAuth,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  closeProfil: () => {
    dispatch(closeModal('profil'));
  },
  onSubmitProfil: () => {
    // dispatch(onSubmitProfil());
    dispatch(closeModal('profil'));
    dispatch(fakeAuth());
  },
});

// Container - connect
const ProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);

// Export
export default ProfilContainer;
