import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import css from './SearchBox.module.css';

const SearchBox = ({ onSubmit }) => {
  const [filmName, setFilmName] = useState('');

  const handleSearchChange = event => {
    setFilmName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (filmName.trim() === '') {
      //   return toast.warn('Enter film name');
      return alert('Please enter film name');
    }
    onSubmit(filmName);
    // -якщо необхідно очистити форму:
    // setPictureName('');
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit" aria-label="Search">
          <ImSearch size={20} />
        </button>

        <input
          className={css.input}
          onChange={handleSearchChange}
          value={filmName}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search film"
        />
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
