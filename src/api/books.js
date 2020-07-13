import server from './config';

export const getAllBooks = () => {
  return server.get('books').then(res => res.data);
};

export const getBook = id => {
  return server.get(`books/${id}`).then(res => res.data);
};

export const postReview = (id, data) => {
  return server.post(`books/${id}/reviews`, { data }).then(res => res.data);
};
