// npm import
import { connect } from 'react-redux';

// composant
import Home from 'src/components/Home';

// action creators
import { openModal, animateModal } from '../store/reducers/modal';
import { loadHomeVisitor } from '../store/reducers/homeVisitor';

// === State (données) ===
const mapStateToProps = state => ({
  homeData: state.homeVisitor.homeData,
  isLoginOpen: state.modal.login,
  isSubscribeOpen: state.modal.subscribe,
  isAuthenticated: state.loginForm.isAuthenticated,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  loadHomeVisitor: () => {
    dispatch(loadHomeVisitor());
  },
  openLogin: () => {
    dispatch(openModal('login'));
    dispatch(animateModal('bounce'));
  },
  openSubscribe: () => {
    dispatch(openModal('subscribe'));
    dispatch(animateModal('bounce'));
  },
});

// Container - connect
const HomeVisitor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// Export
export default HomeVisitor;
