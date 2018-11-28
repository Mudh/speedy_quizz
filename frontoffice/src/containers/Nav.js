// npm import
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// composant
import Nav from 'src/components/Nav';

// Actions creators
import { disconnect } from '../store/reducers/loginForm';

// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.loginForm.isAuthenticated,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  onClickDisconnect: () => {
    dispatch(disconnect());
    localStorage.removeItem('jwtToken');
  },
});

// Container - connect
const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

// Export
// Ici exceptionnelement avec 'withRouter'
// car les navLinks ne s'auto update pas lorqu'ils sont connectés au store
// et n'appliquent pas la classe css 'is-selected'
// https://github.com/ReactTraining/react-router/issues/4638

export default withRouter(NavContainer);
