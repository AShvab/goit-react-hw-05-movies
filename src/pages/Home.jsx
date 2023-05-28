import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trendingMoviesFetch } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    trendingMoviesFetch().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
