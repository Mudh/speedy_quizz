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
      <form className="form form--profil" onSubmit={this.handleSubmit}>
        <fieldset>
          <label>Nom :</label>
          <input
            className="form-input"
            type="text"
            placeholder="Votre nom"
            autoComplete="off"
            value="Doubal"
            onChange={this.handleChange}
          />
          <label>Prénom :</label>
          <input
            className="form-input"
            type="text"
            placeholder="Votre prénom"
            autoComplete="off"
            value="Jean Pierre"
            onChange={this.handleChange}
          />
          <label>Email :</label>
          <input
            className="form-input"
            type="email"
            placeholder="Votre email"
            autoComplete="off"
            value="doubalpierre@gmail.com"
            onChange={this.handleChange}
          />
          <label>Ancien mot de passe :</label>
          <input
            className="form-input"
            type="password"
            placeholder="Ancien mot de passe"
            autoComplete="off"
            value={inputValue}
            onChange={this.handleChange}
          />
          <label>Nouveau mot de passe :</label>
          <input
            className="form-input"
            type="password"
            placeholder="Nouveau mot de passe"
            autoComplete="off"
            value={inputValue}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Description :</label>
          <textarea
            className="form-textarea"
            type="textarea"
            placeholder="Description"
            autoComplete="off"
            value={inputValue}
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
