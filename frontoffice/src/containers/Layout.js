// npm import
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
// composant
import Layout from 'src/components/Layout';
import { disconnect } from '../store/reducers/loginForm';
import { openModal } from '../store/reducers/modal';
import { loadQuizTheme } from '../store/reducers/homeMembre';

// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.loginForm.isAuthenticated,
  isExpiredOpen: state.modal.expired,
  themes: state.homeMembre.themes,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  loadQuizTheme: () => {
    dispatch(loadQuizTheme());
  },
  checkAuth: () => {
    const expiredPeriod = jwt.decode(localStorage.getItem('jwtToken')).exp;
    const currentPeriod = Math.floor(Date.now() / 1000);
    if (currentPeriod > expiredPeriod) {
      dispatch(openModal('expired'));
      dispatch(disconnect());
      localStorage.removeItem('jwtToken');
    } else {
      console.log('Restons loggué');
    }
  },
});

// Container - connect
const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);

// Export
export default LayoutContainer;
