import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCastFetch } from 'services/api';
import css from './Cast.module.css';

const Cast = () => {
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieCastFetch(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={css.list}>
      {casts.cast &&
        casts.cast.map(({ id, character, name, profile_path }) => (
          <li key={id} className={css.item}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                width={200}
                alt={name}
                className={css.img}
              />
            ) : (
              <img
                src={
                  // 'https://cdn.pixabay.com/photo/2016/09/25/14/09/cat-1693788_1280.jpg'
                  'https://via.placeholder.com/200x300'
                }
                alt={''}
                width={200}
                className={css.img}
              />
            )}
            <div className={css.text}>
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
