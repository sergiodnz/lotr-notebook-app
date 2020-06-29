import React from 'react';

const Movie = ({ movie, onUpdate, onReset }) => {
  const marked = movie.bookmarked || movie.watched;

  return (
    <div>
      <div>{movie.name}</div>
      <div>{`Academy Awards: ${movie.academyAwardWins}`}</div>
      {!marked && (
        <span>
          <button onClick={() => onUpdate(movie._id, 'bookmarked')}>
            <i className="fa fa-star"></i>
          </button>
        </span>
      )}
      {!marked && (
        <span>
          <button onClick={() => onUpdate(movie._id, 'watched')}>
            <i className="fa fa-check"></i>
          </button>
        </span>
      )}
      {marked && (
        <span>
          <button onClick={() => onReset(movie._id)}>
            <i className="fa fa-times"></i>
          </button>
        </span>
      )}
    </div>
  );
};

export default Movie;
