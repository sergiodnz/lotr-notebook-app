import axios from 'axios';

const headers = { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` };

export const getBooks = () => {
  return axios
    .get('http://localhost:5000/books', { headers })
    .then(response => response.data);
};
