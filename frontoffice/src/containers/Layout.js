// npm import
import { connect } from 'react-redux';

// composant
import Layout from 'src/components/Layout';

// === State (données) ===
const mapStateToProps = state => ({
  fakeAuth: state.loginForm.fakeAuth,
});

// === Dispatch (actions) ===
const mapDispatchToProps = () => ({});

// Container - connect
const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);

// Export
export default LayoutContainer;
