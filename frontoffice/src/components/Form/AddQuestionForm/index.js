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

class AddQuestionForm extends React.Component {
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
      <form className="form form--add-question" onSubmit={this.handleSubmit}>
        <label>La question : </label>
        <input
          className="form-input"
          type="text"
          placeholder="Proposez votre question"
          autoComplete="off"
          value={inputValue}
          onChange={this.handleChange}
        />
        <label>La bonne réponse : </label>
        <input
          className="form-input"
          type="text"
          placeholder="Donnez la bonne réponse"
          autoComplete="off"
          value={inputValue}
          onChange={this.handleChange}
        />
        <label>Une mauvaise réponse : </label>
        <input
          className="form-input"
          type="text"
          placeholder="Donnez une mauvaise réponse"
          autoComplete="off"
          value={inputValue}
          onChange={this.handleChange}
        />
        <label>Une mauvaise réponse : </label>
        <input
          className="form-input"
          type="text"
          placeholder="Donnez une mauvaise réponse"
          autoComplete="off"
          value={inputValue}
          onChange={this.handleChange}
        />
        <label>Une mauvaise réponse : </label>
        <input
          className="form-input"
          type="text"
          placeholder="Donnez une mauvaise réponse"
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
export default AddQuestionForm;
