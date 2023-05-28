import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCastFetch } from 'services/api';

const Cast = () => {
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieCastFetch(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {casts.cast &&
        casts.cast.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                width={200}
                alt={name}
              />
            ) : (
              <img
                // src={'https://cdn.pixabay.com/photo/2013/07/13/13/49/sheep-161630_1280.png'}
                src={
                  'https://cdn.pixabay.com/photo/2016/09/25/14/09/cat-1693788_1280.jpg'
                }
                alt={''}
                width={200}
              />
            )}

            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
