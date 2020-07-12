import React, { useState, useEffect } from 'react';

import * as API from '../api/movies';

import MovieList from '../components/MovieList';
import Page from '../components/Page';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.getAllMovies().then(data => setMovies(data));
  }, []);

  return (
    <Page>
      <MovieList
        title="Movies"
        movies={movies}
        setMovies={setMovies}
        filter={m => !(m.watched || m.bookmarked)}
      />
      <MovieList
        title="Watched"
        movies={movies}
        setMovies={setMovies}
        filter={m => m.watched}
      />
      <MovieList
        title="Bookmarked"
        movies={movies}
        setMovies={setMovies}
        filter={m => m.bookmarked}
      />
    </Page>
  );
};

export default Movies;
