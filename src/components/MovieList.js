import React, { useState } from 'react';
import Movie from './Movie';

const SORT_BY = {
  NAME: 'name',
  ACADEMY_AWARDS: 'academyAwardWins',
};

const gestSortedMovies = (movies, sortBy) => {
  switch (sortBy) {
    case SORT_BY.NAME:
      return movies.slice().sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    default:
      return movies.slice().sort((a, b) => b[sortBy] - a[sortBy]);
  }
};

const MovieList = ({ title, movies, onUpdateMovie, onResetMovie }) => {
  const [sortBy, setSortBy] = useState(SORT_BY.ACADEMY_AWARDS);
  const sortedMovies = gestSortedMovies(movies, sortBy);

  return (
    <div className="movie-list">
      <h3>
        <span>{title}</span>
        <button
          className="sort-button"
          onClick={() => setSortBy(SORT_BY.ACADEMY_AWARDS)}
        >
          <i className="fa fa-sort-amount-desc"></i>
        </button>
        <button className="sort-button" onClick={() => setSortBy(SORT_BY.NAME)}>
          <i className="fa fa-sort-alpha-asc"></i>
        </button>
      </h3>
      <ul>
        {sortedMovies.map(movie => (
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
