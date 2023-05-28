import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trendingMoviesFetch } from 'services/api';

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
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title, release_date }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title} {getReleaseYear({ release_date })}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;

