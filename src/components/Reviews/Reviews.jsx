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
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
              {/* <a href={review.url} target="_blank" rel="noopener noreferrer">
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
