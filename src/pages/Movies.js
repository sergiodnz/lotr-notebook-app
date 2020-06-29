import React from 'react';

import MovieList from '../components/MovieList';
import PageTitle from '../components/PageTitle';

const Movies = ({ allMovies, onResetMovie, onUpdateMovie }) => {
  const watched = allMovies.filter(movie => movie.watched);
  const bookmarked = allMovies.filter(movie => movie.bookmarked);
  const movies = allMovies.filter(movie => !movie.watched && !movie.bookmarked);

  return (
    <div>
      <PageTitle title="The Lord of The Rings" path="movies" />
      <MovieList
        title="Movies"
        movies={movies}
        onUpdateMovie={onUpdateMovie}
        onResetMovie={onResetMovie}
      />
      <MovieList
        title="Watched"
        movies={watched}
        onUpdateMovie={onUpdateMovie}
        onResetMovie={onResetMovie}
      />
      <MovieList
        title="Bookmarked"
        movies={bookmarked}
        onUpdateMovie={onUpdateMovie}
        onResetMovie={onResetMovie}
      />
    </div>
  );
};

export default Movies;
