import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const contacts = this.state.contacts;
    const form = evt.currentTarget;

    const contactName = form.elements.name.value;
    contacts.push({ name: contactName, id: nanoid() });
    console.log(contacts);
    form.reset();
  };

  render() {
    const contacts = this.state.contacts;
    console.log(contacts);
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
          <button
            className={css.submitButton}
            type="submit"
            onSubmit={this.handleSubmit}
          >
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={nanoid()}>
              <p>{contact}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
