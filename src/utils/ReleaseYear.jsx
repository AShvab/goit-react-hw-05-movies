import React from 'react';

const ReleaseYear = ({ movie }) => {
  const getReleaseYear = () => {
    if (movie && movie.release_date) {
      const releaseDate = new Date(movie.release_date);
      return releaseDate.getFullYear();
    }
    return '';
  };

  return <span>{getReleaseYear()}</span>;
};

export default ReleaseYear;
