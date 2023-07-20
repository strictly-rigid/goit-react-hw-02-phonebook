import React, { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label className={css.filterLabel}>
        <h2 className={css.filterHeader}>Find contacts by name</h2>
        <input
          className={css.filterInput}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default Filter;
