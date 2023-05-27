import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { movieDetailsFetch } from 'services/api';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <div>
      {loading && 'Loading ...'}
      {error && <div>{error}</div>}
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
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
}

export default MovieDetails;
