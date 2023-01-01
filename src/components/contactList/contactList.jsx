import { Component } from 'react';
import css from './App.module.css';

export class contactList extends Component {
  render() {
    return this.props.map(({ name, id }) => (
      <li key={id} className={css.listItem}>
        <p>{name}</p>
      </li>
    ));
  }
}

export default contactList;
