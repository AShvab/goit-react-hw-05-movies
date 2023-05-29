import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trendingMoviesFetch } from 'services/api';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    trendingMoviesFetch().then(setMovies);
  }, []);

  const getReleaseYear = movie => {
    if (movie && movie.release_date) {
      const releaseDate = new Date(movie.release_date);
      return `(${releaseDate.getFullYear()})`;
    }
    return '';
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.list}>
        {movies.map(({ id, title, release_date }) => {
          return (
            <li key={id} className={css.item}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={css.link}
              >
                {title} {getReleaseYear({ release_date })}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
