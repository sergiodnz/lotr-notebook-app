import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBook, addReview, updateReview, deleteReview } from '../api/livros';
import PageContent from '../componentes/PageContent';

const DetalheLivro = () => {
  const { id } = useParams();
  const [idBook, setIdBook] = useState(0);
  const [name, setName] = useState('');
  const [reviews, setReviews] = useState([]);
  const [_id, set_id] = useState(0);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [stars, setStars] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getBook(id).then(book => {
      if (book) {
        setIdBook(book._id);
        setName(book.name);
        setReviews(book.reviews);
      }
    });
  }, [id]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChangeText = event => {
    setText(event.target.value);
  };

  const handleChangeStars = event => {
    const value = parseInt(event.target.value);
    if (value >= 0 && value <= 5) {
      setStars(value);
    }
  };

  const handleChangeAuthor = event => {
    setAuthor(event.target.value);
  };

  const handleEditReview = review => {
    set_id(review._id);
    setAuthor(review.author);
    setStars(review.stars);
    setText(review.text);
    setShowForm(true);
  };

  const handleDeleteReview = idReview => {
    deleteReview(idBook, idReview).then(res => {
      const updatedReviews = reviews.filter(
        review => review._id !== res.deleted
      );
      setReviews(updatedReviews);
    });
  };

  const submitForm = event => {
    event.preventDefault();
    if (_id) {
      updateReview(idBook, { _id, author, text, stars }).then(r => {
        const updatedReviews = reviews.filter(review => review._id !== _id);
        setReviews([r].concat(updatedReviews));
        set_id(0);
        setAuthor('');
        setStars(0);
        setText('');
        setShowForm(false);
      });
    } else {
      addReview(idBook, { author, text, stars }).then(r => {
        setReviews([r].concat(reviews));
        set_id(0);
        setAuthor('');
        setStars(0);
        setText('');
        setShowForm(false);
      });
    }
  };

  return (
    <PageContent name="Livros">
      <div className="movie-list-item">
        <div>
          <span>
            Title: <strong>{name}</strong>
          </span>
        </div>
        <div>
          <span>
            Reviews: <strong>{reviews.length}</strong>
          </span>
        </div>
        <div>
          <span>
            <button onClick={toggleForm}>Add Review</button>
          </span>
        </div>
        {showForm && (
          <div>
            <hr />
            <form onSubmit={submitForm}>
              <div>
                <span>Name:</span>
                <input
                  type="text"
                  name="author"
                  value={author}
                  onChange={handleChangeAuthor}
                />
              </div>
              <div>
                <span>Stars:</span>
                <input
                  type="number"
                  name="stars"
                  value={stars}
                  onChange={handleChangeStars}
                />
              </div>
              <div>
                <span>Review:</span>
                <textarea
                  rows={10}
                  name="text"
                  value={text}
                  onChange={handleChangeText}
                />
              </div>
              <div>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        )}
        <div>
          {reviews.map(review => (
            <div key={review._id}>
              <hr />
              <div>
                <i className="fa fa-star"></i>
                <span>&nbsp;{review.stars}</span>
              </div>
              <div>
                <span>
                  <strong>Author: </strong>
                  {review.author}
                </span>
              </div>
              <div>
                <span>
                  <strong>Review: </strong> {review.text}
                </span>
              </div>
              <div>
                <button onClick={() => handleEditReview(review)}>
                  <i className="fa fa-edit"></i>
                </button>
                <button onClick={() => handleDeleteReview(review._id)}>
                  <i className="fa fa-eraser"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </PageContent>
  );
  // }
};

// export default withRouter(DetalheLivro);
export default DetalheLivro;
