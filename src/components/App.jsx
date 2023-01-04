import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './App.module.css';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contactName = evt.currentTarget.elements.name.value;
    const contactNumber = evt.currentTarget.elements.number.value;
    const newContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === contactName)) {
      return alert(`${contactName} is already in contacts.`);
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
    form.reset();
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getFiltredContacts();
    return (
      <div className={css.mainModule}>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
