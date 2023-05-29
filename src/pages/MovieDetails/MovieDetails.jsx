// import React, { useEffect, useRef, useState } from 'react';
// import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
// import { movieDetailsFetch } from 'services/api';
// import css from './MovieDetails.module.css';

// const MovieDetails = () => {
//   const [movie, setMovie] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();
//   const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

//   const { movieId } = useParams();

//   useEffect(() => {
//     setLoading(true);
//     movieDetailsFetch(movieId)
//       .then(res => {
//         setMovie(res);
//       })
//       .catch(error => {
//         setError('Ooops. Something went wrong...');
//       })
//       .finally(() => setLoading(false));
//   }, [movieId]);

//   const getReleaseYear = () => {
//     if (movie && movie.release_date) {
//       const releaseDate = new Date(movie.release_date);
//       return releaseDate.getFullYear();
//     }
//     return '';
//   };

//   return (
//     <div>
//       {loading && <div>Loading ...</div>}
//       <Link to={backLinkLocationRef.current} className={css.linkBack}>
//         {' '}
//         &larr; Go back{' '}
//       </Link>

//       {error && <div>{error}</div>}
//       {movie && (
//         <div className={css.movieCard}>
//           {movie.poster_path ? (
//             <img
//               src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
//               alt={movie.title}
//               className={css.poster}
//             />
//           ) : (
//             <img
//               src={
//                 'https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
//               }
//               alt="Nothing"
//               className={css.poster}
//             />
//           )}
//           <div className={css.movieInfo}>
//             <h2>
//               {movie.title} ({getReleaseYear()})
//             </h2>
//             <p>User Score: {(movie.vote_average * 10).toFixed(0)}%</p>

//             <div>
//               <h3>Overview</h3>
//               <p>{movie.overview}</p>
//             </div>
//             <div>
//               <h3>Genres</h3>
//               {movie.genres &&
//                 movie.genres.map(({ name, id }) => (
//                   <p key={id} className={css.movieGenres}>
//                     {name}
//                   </p>
//                 ))}
//             </div>
//           </div>
//         </div>
//       )}
//       <div className={css.wrapper}>
//         <h4 className={css.subtitle}>Additional information</h4>
//         <ul>
//           <li>
//             <Link to="cast" className={css.linkList}>
//               Cast
//             </Link>
//           </li>
//           <li>
//             <Link to="reviews" className={css.linkList}>
//               Reviews
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <Outlet />
//     </div>
//   );
// };

// export default MovieDetails;

import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetailsFetch } from 'services/api';
import css from './MovieDetails.module.css';
import ReleaseYear from 'utils/ReleaseYear';


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

  return (
    <div>
      {loading && <div>Loading ...</div>}
      <Link to={backLinkLocationRef.current} className={css.linkBack}>
        {' '}
        &larr; Go back{' '}
      </Link>

      {error && <div>{error}</div>}
      {movie && (
        <div className={css.movieCard}>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
              className={css.poster}
            />
          ) : (
            <img
              src={
                'https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
              }
              alt="Nothing"
              className={css.poster}
            />
          )}
          <div className={css.movieInfo}>
            <h2>
              {movie.title} (<ReleaseYear movie={movie} />)
            </h2>
            <p>User Score: {(movie.vote_average * 10).toFixed(0)}%</p>

            <div>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div>
              <h3>Genres</h3>
              {movie.genres &&
                movie.genres.map(({ name, id }) => (
                  <p key={id} className={css.movieGenres}>
                    {name}
                  </p>
                ))}
            </div>
          </div>
        </div>
      )}
      <div className={css.wrapper}>
        <h4 className={css.subtitle}>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" className={css.linkList}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.linkList}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetails;

