import React, { Component } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

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
