// npm import
import { connect } from 'react-redux';

// composant
import Layout from 'src/components/Layout';

// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.loginForm.isAuthenticated,
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
