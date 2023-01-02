import { Component } from 'react';
import css from './ContactListItem.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

export class ContactListItem extends Component {
  render() {
    return this.props.filteredContacts.map(({ name, id, number }) => (
      <li key={id} className={css.listItem}>
        <ContactItem name={name} number={number} />
        <button type="button" onClick={() => this.props.deleteContact(id)}>
          Delete
        </button>
      </li>
    ));
  }
}

ContactListItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
