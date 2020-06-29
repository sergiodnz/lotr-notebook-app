import React from 'react';
import Movie from './Movie';

const MovieList = ({ title, movies, onUpdateMovie, onResetMovie }) => {
  return (
    <div className="movie-list">
      <h3>
        <span>{title}</span>
        <button className="sort-button">
          <i className="fa fa-sort-amount-desc"></i>
        </button>
        <button className="sort-button">
          <i className="fa fa-sort-alpha-asc"></i>
        </button>
      </h3>
      <ul>
        {movies.map(movie => (
          <li key={movie._id} className="movie-list-item">
            <Movie
              movie={movie}
              onUpdate={onUpdateMovie}
              onReset={onResetMovie}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
