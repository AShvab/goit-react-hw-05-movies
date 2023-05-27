import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import css from './SearchBox.module.css';
import { toast } from 'react-hot-toast';

const SearchBox = ({ onChange }) => {
  const [filmName, setFilmName] = useState('');

  const handleSearchChange = event => {
    setFilmName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (filmName.trim() === '') {
      return toast('Please enter film name');
    }
    onChange(filmName);
    // -якщо необхідно очистити форму:
    // setFilmName('');
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
          placeholder="Search movie"
        />
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
