// npm import
import { connect } from 'react-redux';

// composant
import Home from 'src/components/HomeMembre';

// action creators
import { sendRequest } from '../store/reducers/homeMembre';

// === State (données) ===
const mapStateToProps = state => ({
  fakeAuth: state.loginForm.fakeAuth,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  sendRequest: () => {
    dispatch(sendRequest());
  },
});

// Container - connect
const HomeMembre = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// Export
export default HomeMembre;
