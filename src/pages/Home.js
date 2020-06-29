import React from 'react';
import MovieList from '../components/MovieList';
import PageTitle from '../components/PageTitle';

const Home = ({ movies, onResetMovie }) => {
  const bookmarkedMovies = movies.filter(movie => movie.bookmarked);
  return (
    <div>
      <PageTitle title="The Lord of The Rings" path="" />
      <MovieList
        title="Bookmarked Movies"
        movies={bookmarkedMovies}
        onResetMovie={onResetMovie}
      />
    </div>
  );
};

export default Home;
