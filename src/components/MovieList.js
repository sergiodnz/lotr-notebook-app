import React, { useState } from 'react';

import * as API from '../api/movies';

import Action from './Action';

const SORT_BY = {
  NAME: { getSort: (a, b) => a.name.localeCompare(b.name) },
  ACADEMY_AWARDS: {
    getSort: (a, b) => b.academyAwardWins - a.academyAwardWins,
  },
};

const MovieList = ({ title, movies, setMovies, filter }) => {
  // Component state
  const [sortBy, setSortBy] = useState(SORT_BY.ACADEMY_AWARDS);

  // Computed list
  const subList = movies.filter(filter).sort(sortBy.getSort);

  // Handle movie updates
  const updateMovie = movie => {
    const updatedMovies = movies.map(m => (m._id === movie._id ? movie : m));
    setMovies(updatedMovies);
  };

  // Handle component actions
  const vote = (id, option) => API.vote(id, option).then(updateMovie);

  const setBookmarked = id =>
    API.update(id, { bookmarked: true }).then(updateMovie);

  const setWatched = id => API.update(id, { watched: true }).then(updateMovie);

  const resetMovie = id =>
    API.update(id, { watched: false, bookmarked: false }).then(updateMovie);

  return (
    <div className="list">
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
        {subList.map(movie => {
          const marked = movie.bookmarked || movie.watched;
          return (
            <li key={movie._id} className="list-item">
              <div>
                <div>{movie.name}</div>
                <div>
                  <span>{`Score: ${movie.score}`}</span>
                  <Action
                    show
                    icon="fa-thumbs-up"
                    action={() => vote(movie._id, 'up')}
                  />
                  <Action
                    show
                    icon="fa-thumbs-down"
                    action={() => vote(movie._id, 'down')}
                  />
                </div>
                <div>{`Academy Awards: ${movie.academyAwardWins}`}</div>
                <div>
                  <span>Actions:</span>
                  <Action
                    show={!marked}
                    action={() => setBookmarked(movie._id)}
                    icon="fa-star"
                  />
                  <Action
                    show={!marked}
                    action={() => setWatched(movie._id)}
                    icon="fa-check"
                  />
                  <Action
                    show={marked}
                    action={() => resetMovie(movie._id)}
                    icon="fa-times"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
