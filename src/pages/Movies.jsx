import SearchBox from 'components/SearchBox/SearchBox';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMoviesFetch } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      searchMoviesFetch(query).then(setMovies);
    }
  }, [query, searchParams]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const getReleaseYear = movie => {
    if (movie && movie.release_date) {
      const releaseDate = new Date(movie.release_date);
      return `(${releaseDate.getFullYear()})`;
    }
    return '';
  };

  return (
    <>
      <SearchBox value={query} onChange={updateQueryString} />
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title} {getReleaseYear(movie)}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Movies;
