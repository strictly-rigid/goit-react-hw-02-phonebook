import css from '../Contacts.module.css';

const ContactListItem = ({ contact, onDelete }) => {
  return (
    <li className={css.contactItem}>
      <div className={css.contactWrapper}>
        <span className={css.contactName}>
          {contact.name} : {contact.number}
        </span>
        <button
          type="button"
          className={css.deleteBtn}
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
