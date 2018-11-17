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
    // inputValue: PropTypes.string.isRequired,
    // onChangeInput: PropTypes.func.isRequired,
    // name: PropTypes.string.isRequired,
    // onSubmitValue: PropTypes.func.isRequired,
  };

  /*
   * Handlers
   */
  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   const { onSubmitValue, name, inputValue } = this.props;
  //   onSubmitValue(name, inputValue);
  // };

  // handleChange = evt => {
  //   const valueInput = evt.target.value;
  //   const { onChangeInput } = this.props;
  //   onChangeInput(valueInput);
  // };

  render() {
    const { inputValue } = this.props;

    return (
      <form className="form form--login" onSubmit={this.handleSubmit}>
        <label>Email :</label>
        <input
          className="form-input"
          type="email"
          placeholder="Entrez votre email"
          autoComplete="off"
          value={inputValue}
          onChange={this.handleChange}
        />
        <label>Mot de passe :</label>
        <input
          className="form-input"
          type="password"
          placeholder="Entrez votre mot de passe"
          autoComplete="off"
          value={inputValue}
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
