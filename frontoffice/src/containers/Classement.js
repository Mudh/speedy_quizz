// npm import
import { connect } from 'react-redux';

// composant
import Classement from 'src/components/Classement';

// === State (données) ===
const mapStateToProps = state => ({
  ranking: state.classement.ranking,
});

// === Dispatch (actions) ===
const mapDispatchToProps = () => ({});

// Container - connect
const ClassementContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Classement);

export default ClassementContainer;
