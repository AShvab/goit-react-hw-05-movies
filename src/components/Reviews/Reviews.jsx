import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviewsFetch } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieReviewsFetch(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({id, author, content}) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
              {/* <a href={url} target="_blank" rel="noopener noreferrer">
                Read More
              </a> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
