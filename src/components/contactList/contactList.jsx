import { Component } from 'react';
import css from './contactList.module.css';
import { contactItem } from '../contactItem/contactItem';

export class contactList extends Component {
  render() {
    return this.props.map(({ name, id }) => (
      <li key={id} className={css.listItem}>
        <contactItem name={name} />
      </li>
    ));
  }
}

export default contactList;
