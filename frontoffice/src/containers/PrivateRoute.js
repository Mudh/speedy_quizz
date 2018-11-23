// npm import
import { connect } from 'react-redux';

// composant
import PrivateRoute from 'src/components/PrivateRoute';

// === State (données) ===
const mapStateToProps = state => ({
  fakeAuth: state.loginForm.fakeAuth,
});

// === Dispatch (actions) ===
const mapDispatchToProps = () => ({});

// Container - connect
const PrivateRouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute);

// Export
export default PrivateRouteContainer;
