import { Component } from 'react';
import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    return (
      <ul className={css.list}>
        <ContactListItem
          filteredContacts={this.props.filteredContacts}
          deleteContact={this.props.deleteContact}
        />
      </ul>
    );
  }
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
