import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import css from './SearchBox.module.css';
import { toast } from 'react-hot-toast';

const SearchBox = ({ value, onChange }) => {
  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      return toast('Please enter film name');
    }
    onChange(value);
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
          onChange={e => onChange(e.target.value)}
          value={value}
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
