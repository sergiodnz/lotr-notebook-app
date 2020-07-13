import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as API from '../api/books';

const Review = () => {
  const { id } = useParams();

  const [review, setReview] = useState([]);

  useEffect(() => {
    API.getBook(id).then(data => {
      setReview({ book: data, author: 'xpto', text: 'xpto', stars: 0 });
    });
  }, [id]);

  const handleOptionChange = event => {
    console.log(review);
    const { book, author, text } = review;
    setReview({ book, author, text, stars: event.target.value });
  };

  return (
    <div>
      <div>
        <strong>{review.book ? review.book.name : ''}</strong>
      </div>
      <form>
        <div>
          <input value={review.author} placeholder="Author" />
        </div>
        <div>
          <textarea value={review.text} placeholder="Comment" />
        </div>
        <div>
          <button>Send</button> <button>Cancel</button>
        </div>

        <div className="radio">
          <label>Stars</label>
        </div>
        <div className="radio">
          <label>
            1
            <input
              type="radio"
              value="1"
              checked={review.stars === 1}
              onChange={handleOptionChange}
            />
          </label>
          <label>
            2
            <input
              type="radio"
              value="2"
              onChange={handleOptionChange}
              checked={review.stars === 2}
            />
          </label>
          <label>
            3
            <input
              type="radio"
              value="3"
              checked={review.stars === 3}
              onChange={handleOptionChange}
            />
          </label>
          <label>
            4
            <input
              type="radio"
              value="4"
              checked={review.stars === 4}
              onChange={handleOptionChange}
            />
          </label>
          <label>
            5
            <input
              type="radio"
              value="5"
              checked={review.stars === 5}
              onChange={handleOptionChange}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Review;
