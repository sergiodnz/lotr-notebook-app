import React from 'react';
import MovieList from '../components/MovieList';

const Home = ({ movies, onResetMovie }) => {
  const bookmarkedMovies = movies.filter(movie => movie.bookmarked);
  return (
    <div>
      <div className="page-title">
        <h1>The Lord of The Rings</h1>
        <h2>notebook app</h2>
      </div>
      <MovieList
        title="Bookmarked Movies"
        movies={bookmarkedMovies}
        onResetMovie={onResetMovie}
      />
    </div>
  );
};

export default Home;
