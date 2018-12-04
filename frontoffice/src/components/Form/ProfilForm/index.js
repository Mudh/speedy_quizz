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

class ProfilForm extends React.Component {
  static propTypes = {
    inputValue: PropTypes.string,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onChangeProfil: PropTypes.func.isRequired,
    onSubmitProfil: PropTypes.func.isRequired,
  };

  /*
   * Handlers
   */
  handleSubmit = evt => {
    const { onSubmitProfil } = this.props;
    if (evt.key === 'Enter') {
      onSubmitProfil();
    }
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    const { onChangeProfil } = this.props;
    onChangeProfil(name, value);
  };

  render() {
    const { firstname, lastname, username, email, description } = this.props;

    return (
      <form className="form form--profil" onKeyUp={this.handleSubmit}>
        <fieldset>
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
            placeholder="Mot de passe"
            autoComplete="off"
            value=""
            onChange={this.handleChange}
          />
          {/* <label>Nouveau mot de passe :</label>
          <input
            className="form-input"
            name="password"
            type="password"
            placeholder="Nouveau mot de passe"
            autoComplete="off"
            value=""
            onChange={this.handleChange}
          /> */}
        </fieldset>
        <fieldset>
          <label>Description :</label>
          <textarea
            className="form-textarea"
            name="description"
            type="textarea"
            placeholder="Description"
            autoComplete="off"
            value={description}
            onChange={this.handleChange}
            rows="12"
          />
        </fieldset>
      </form>
    );
  }
}

/**
 * Export
 */
export default ProfilForm;
