import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ title, books }) => {
  return (
    <div className="list">
      <h3>{title}</h3>
      <ul>
        {books.map(book => (
          <li key={book._id} className="list-item">
            <div>
              <strong>
                <Link to={`book/${book._id}`}>{book.name}</Link>
              </strong>
            </div>
            <div>Reviews: {book.reviews.length}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
