// npm import
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
// composant
import Layout from 'src/components/Layout';
import { disconnect } from '../store/reducers/loginForm';
import { openModal } from '../store/reducers/modal';
import { loadQuizTheme } from '../store/reducers/homeMembre';
import { reloadPlayerInfos } from '../store/reducers/sideRightLog';
import { setQuizStop } from '../store/reducers/quiz';
import { loadRanking } from '../store/reducers/classement';

// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.loginForm.isAuthenticated,
  isExpiredOpen: state.modal.expired,
  isQuizStart: state.quiz.isQuizStart,
  themes: state.homeMembre.themes,
  totalPoints: state.sideRightLog.totalPoints,
  isLoading: state.loader.isLoading,
  ranking: state.classement.ranking,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  loadRanking: () => {
    dispatch(loadRanking());
  },
  setQuizStop: () => {
    dispatch(setQuizStop());
  },
  reloadPlayerInfos: () => {
    dispatch(reloadPlayerInfos());
  },
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
