import PropTypes from 'prop-types';
import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactSlice';

function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} id={contact.id} className={css.contactListItem}>
            <span className={css.contactListName}>{contact.nameInput}</span>
            <span className={css.contactListNumber}>{contact.number}</span>
            <button
              className={css.deleteButton}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nameInput: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
