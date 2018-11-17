// npm import
import { connect } from 'react-redux';

// composant
import Home from 'src/components/Home';

// action creators
import { openModal } from '../store/reducers/modal';

// === State (données) ===
const mapStateToProps = state => ({
  isLoginOpen: state.modal.login,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  openLogin: () => {
    dispatch(openModal('login'));
  },
});

// Container - connect
const HomeVisitor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// Export
export default HomeVisitor;
