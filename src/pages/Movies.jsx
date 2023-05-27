import SearchBox from 'components/SearchBox/SearchBox';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMoviesFetch } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query') ?? '';
  
  useEffect(() => {
    if (query) {
      searchMoviesFetch(query).then(setMovies);
    }
  }, [query, searchParams]);

  const nextQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBox value={query} onChange={nextQueryString} />
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </>
  );
};

export default Movies;
