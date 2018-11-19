// npm import
import { connect } from 'react-redux';

// composant
import Home from 'src/components/Home';

// action creators
import { openModal } from '../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({
  isLoginOpen: state.modal.login,
  isSubscribeOpen: state.modal.subscribe,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  openLogin: () => {
    dispatch(openModal('login'));
  },
  openSubscribe: () => {
    dispatch(openModal('subscribe'));
  },
});

// Container - connect
const HomeVisitor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// Export
export default HomeVisitor;
