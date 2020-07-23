import server from './config';

export const getBooks = () => {
  return server.get('books').then(res => res.data);
};

export const getBook = id => {
  return server.get(`books/${id}`).then(res => res.data);
};

export const addReview = (idBook, review) => {
  console.log(review);
  return server.post(`books/${idBook}/reviews`, review).then(res => res.data);
};

export const deleteReview = (idBook, idReview) => {
  console.log({ idBook, idReview });
  return server
    .delete(`books/${idBook}/reviews/${idReview}`)
    .then(res => res.data);
};

export const updateReview = (idBook, review) => {
  console.log(review);
  return server
    .put(`books/${idBook}/reviews/${review._id}`, review)
    .then(res => res.data);
};
