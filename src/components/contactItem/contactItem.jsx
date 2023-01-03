import { Component } from 'react';
// import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export class ContactItem extends Component {
  render() {
    return (
      <p className={css.contact}>
        {this.props.name}:
        <span className={css.number}> {this.props.number}</span>
      </p>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
