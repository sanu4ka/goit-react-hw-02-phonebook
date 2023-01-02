import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
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

  render() {
    const filteredContacts = this.getFiltredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button
            className={css.submitButton}
            type="submit"
            onSubmit={this.handleSubmit}
          >
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <input type="text" name="filter" onChange={this.handleChange} />
        <ul>
          {filteredContacts.map(({ name, number, id }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
