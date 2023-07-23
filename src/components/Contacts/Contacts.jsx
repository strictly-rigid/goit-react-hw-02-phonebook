import React from 'react';
import css from './Contacts.module.css';
import ContactListItem from './ContactListItem/ContactListItem';

const Contacts = ({ actualContacts, deleteContact }) => {
  return (
    <div className={css.contactsContainer}>
      <ul className={css.contactsList}>
        {actualContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDelete={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};
export default Contacts;
