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

class SubscribeForm extends React.Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    onSubmitSubscribe: PropTypes.func.isRequired,
  };

  /*
   * Handlers
   */
  handleSubmit = evt => {
    const { onSubmitSubscribe } = this.props;
    if (evt.key === 'Enter') {
      onSubmitSubscribe();
    }
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    const { onChangeInput } = this.props;
    onChangeInput(name, value);
  };

  render() {
    const { email, password, lastname, firstname, username } = this.props;

    return (
      <form className="form form--subscribe" onKeyUp={this.handleSubmit}>
        <label>Nom :</label>
        <input
          className="form-input"
          name="lastname"
          type="text"
          placeholder="Votre nom"
          autoComplete="off"
          value={lastname}
          onChange={this.handleChange}
        />
        <label>Prénom :</label>
        <input
          className="form-input"
          name="firstname"
          type="text"
          placeholder="Votre prénom"
          autoComplete="off"
          value={firstname}
          onChange={this.handleChange}
        />
        <label>Pseudo :</label>
        <input
          className="form-input"
          name="username"
          type="text"
          placeholder="Votre pseudo"
          autoComplete="off"
          value={username}
          onChange={this.handleChange}
        />
        <label>Email :</label>
        <input
          className="form-input"
          name="email"
          type="email"
          placeholder="Votre email"
          autoComplete="off"
          value={email}
          onChange={this.handleChange}
        />
        <label>Mot de passe :</label>
        <input
          className="form-input"
          name="password"
          type="password"
          placeholder="Votre mot de passe"
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
export default SubscribeForm;
