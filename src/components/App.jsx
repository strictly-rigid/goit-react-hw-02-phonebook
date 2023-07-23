import React, { Component } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  isContactInList = name => {
    const normalizedName = name.trim().toLowerCase();

    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  addContact = newContact => {
    if (this.isContactInList(newContact.name)) {
      alert('This contact already exists!');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase().trim();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <div className={css.appContainer}>
          <h1 className={css.appTitle}>Phonebook</h1>
          <Form
            addContact={this.addContact}
            isContactInList={this.isContactInList}
          />
          <h2 className={css.contactsTitle}>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <Contacts
            actualContacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
