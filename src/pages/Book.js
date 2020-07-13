import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import * as API from '../api/books';

const Book = () => {
  const { id } = useParams();

  const [book, setBook] = useState([]);

  useEffect(() => {
    API.getBook(id).then(book => setBook(book));
  }, [id]);

  const printReview = book._id && book.reviews.length > 0;

  return (
    <div className="list">
      <div>
        <strong>
          <Link to={`${book._id}/review`}>{book.name}</Link>
        </strong>
      </div>
      <div>Reviews: {printReview ? book.reviews.length : 0}</div>
      <div>
        <ul>
          {printReview &&
            book.reviews.map(rev => (
              <li key={rev._id} className="list-item">
                <div>
                  <div>
                    <label>Stars:</label> {rev.stars}
                  </div>
                  <div>
                    <Link to={`review/${rev._id}`}>{rev.text}</Link>
                  </div>
                  <div>
                    <label>by:</label> {rev.author}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Book;
