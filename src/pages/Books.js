import React, { useState, useEffect } from 'react';

import Page from '../components/Page';
import BookList from '../components/BookList';

import * as API from '../api/books';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.getAllBooks().then(books => setBooks(books));
  }, []);

  return (
    <Page>
      <BookList title='"Lord of The Rings" books' books={books} />
    </Page>
  );
};

export default Books;
