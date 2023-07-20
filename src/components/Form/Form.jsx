import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
    isContactInList: false,
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  isContactInList = () => {
    const normalizedName = this.state.name.trim().toLowerCase();

    return this.props.actualContacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  handleAddContact = () => {
    if (this.state.name.trim() !== '') {
      if (this.isContactInList()) {
        alert('This contact already exists!');
      } else {
        const newContact = {
          id: nanoid(),
          name: this.state.name.trim(),
          number: this.state.number.trim(),
        };
        this.props.addContact(newContact);
        this.setState({ name: '', number: '' });
      }
    }
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.formLabel} htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formLabel} htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleNumberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button
          type="submit"
          className={css.formButton}
          onClick={this.handleAddContact}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
