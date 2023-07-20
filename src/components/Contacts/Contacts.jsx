import React, { Component } from 'react';
import css from './Contacts.module.css';

class Contacts extends Component {
  handleDeleteContact = id => {
    this.props.deleteContact(id);
  };
  render() {
    const { actualContacts } = this.props;
    return (
      <div className={css.contactsContainer}>
        <ul className={css.contactsList}>
          {actualContacts.map(contact => (
            <li key={contact.id} className={css.contactItem}>
              <div className={css.contactWrapper}>
                <span className={css.contactName}>
                  {contact.name} : {contact.number}
                </span>
                <button
                  type="button"
                  className={css.deleteBtn}
                  onClick={() => this.handleDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Contacts;
