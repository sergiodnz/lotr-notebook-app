import React, { useState, useEffect } from 'react';

import * as API from '../api/movies';

import MovieList from '../components/MovieList';

const Movies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const watched = allMovies.filter(movie => movie.watched);
  const bookmarked = allMovies.filter(movie => movie.bookmarked);
  const movies = allMovies.filter(movie => !movie.watched && !movie.bookmarked);

  useEffect(() => {
    API.getAllMovies().then(data => setAllMovies(data));
  }, []);

  const handleUpdateMovie = (id, shelf) => {
    const updatedMovies = allMovies.map(movie => {
      if (movie._id === id) {
        return { ...movie, [shelf]: true };
      }
      return movie;
    });
    setAllMovies(updatedMovies);
  };

  const handleResetMovie = id => {
    const updatedMovies = allMovies.map(movie => {
      if (movie._id === id) {
        return { ...movie, bookmarked: false, watched: false };
      }
      return movie;
    });
    setAllMovies(updatedMovies);
  };

  return (
    <div>
      <div className="page-title">
        <h1>The Lord of The Rings</h1>
        <h2>notebook app / movies</h2>
      </div>
      <MovieList
        title="Movies"
        movies={movies}
        onUpdateMovie={handleUpdateMovie}
        onResetMovie={handleResetMovie}
      />
      <MovieList
        title="Watched"
        movies={watched}
        onUpdateMovie={handleUpdateMovie}
        onResetMovie={handleResetMovie}
      />
      <MovieList
        title="Bookmarked"
        movies={bookmarked}
        onUpdateMovie={handleUpdateMovie}
        onResetMovie={handleResetMovie}
      />
    </div>
  );
};

export default Movies;
