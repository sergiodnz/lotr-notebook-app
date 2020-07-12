import React, { useState, useEffect } from 'react';

import * as MoviesAPI from '../api/movies';
import * as BooksAPI from '../api/books';

import MovieList from '../components/MovieList';
import Page from '../components/Page';
import BookList from '../components/BookList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);
  const reviewdBooks = books.filter(book => book.reviews.length > 0);

  useEffect(() => {
    MoviesAPI.getAllMovies().then(data => setMovies(data));
    BooksAPI.getAllBooks().then(books => setBooks(books));
  }, []);

  return (
    <Page>
      <MovieList
        title="Bookmarked Movies"
        movies={movies}
        filter={m => m.bookmarked}
        setMovies={setMovies}
      />
      <BookList title="Reviewed Books" books={reviewdBooks} />
    </Page>
  );
};

export default Home;
