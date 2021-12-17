import React from 'react';
import s from './Filter.module.css';

const Filter = ({ onChange, value }) => {
  return (
    <p className={s.filter}>
      <label className={s.label}>
        Find contacts
        <input
          className={s.input}
          type="text"
          placeholder="Enter name or number"
          onChange={onChange}
          value={value}
        ></input>
      </label>
    </p>
  );
};

export default Filter;
