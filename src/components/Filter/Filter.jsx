import { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    return (
      <div className={css.filter}>
        <p className={css.title}>Find contacts by name</p>
        <input
          className={css.input}
          type="text"
          name="filter"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
