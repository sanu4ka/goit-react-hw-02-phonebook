import { Component } from 'react';
import css from './contactItem.module.css';

export class contactItem extends Component {
  render() {
    return ({ name }) => <p className={css.contactItem}>{name}</p>;
  }
}

export default contactItem;
