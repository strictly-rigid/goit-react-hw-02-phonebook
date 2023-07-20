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

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
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
    const normalizedFilter = this.state.filter.toLowerCase();
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
            actualContacts={filteredContacts}
          />
          <h2 className={css.contactsTitle}>Contacts</h2>
          <Filter
            value={this.state.filter}
            onChange={this.changeFilter}
          ></Filter>
          <Contacts
            actualContacts={filteredContacts}
            deleteContact={this.deleteContact}
          ></Contacts>
        </div>
      </>
    );
  }
}

export default App;
