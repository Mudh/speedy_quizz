/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components

// Styles
import '../form.scss';

/**
 * Code
 */

class LoginForm extends React.Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    onSubmitLogin: PropTypes.func.isRequired,
  };

  /*
   * Handlers
   */
  handleSubmit = evt => {
    const { onSubmitLogin } = this.props;
    if (evt.key === 'Enter') {
      onSubmitLogin();
    }
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    const { onChangeInput } = this.props;
    onChangeInput(name, value);
  };

  render() {
    const { email, password } = this.props;

    return (
      <form className="form form--login" onKeyUp={this.handleSubmit}>
        <label>Email :</label>
        <input
          className="form-input"
          name="email"
          type="email"
          placeholder="Entrez votre email"
          autoComplete="off"
          value={email}
          onChange={this.handleChange}
        />
        <label>Mot de passe :</label>
        <input
          className="form-input"
          name="password"
          type="password"
          placeholder="Entrez votre mot de passe"
          autoComplete="off"
          value={password}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

/**
 * Export
 */
export default LoginForm;
