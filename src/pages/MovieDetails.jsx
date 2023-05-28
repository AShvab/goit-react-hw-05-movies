import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetailsFetch } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    movieDetailsFetch(movieId)
      .then(res => {
        setMovie(res);
      })
      .catch(error => {
        setError('Ooops. Something went wrong...');
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  // Рік виходу фільму
  const getReleaseYear = () => {
    if (movie && movie.release_date) {
      const releaseDate = new Date(movie.release_date);
      return releaseDate.getFullYear();
    }
    return '';
  };

  return (
    <div>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {loading && 'Loading ...'}
      {error && <div>{error}</div>}
      {movie && (
        <div>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <img
              src={'https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'}
              alt="Nothing"
              width={300}
            />
          )}
          <h2>
            {movie.title} ({getReleaseYear()})
          </h2>
          <p>User Score: {(movie.vote_average * 10).toFixed(0)}%</p>

          <div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>

          <div>
            <h3>Genres</h3>
            {movie.genres &&
              movie.genres.map(({ name, id }) => <p key={id}>{name}</p>)}
          </div>
        </div>
      )}
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
