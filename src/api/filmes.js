import axios from 'axios';

const headers = { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` };

export const getMovies = () => {
  return axios
    .get('http://localhost:5000/movies', { headers })
    .then(response => response.data);
};

export const updateMovies = (id, data) => {
  return axios
    .patch(`http://localhost:5000/movies/${id}`, data, { headers })
    .then(response => {
      console.log(response.data);
      return response.data;
    });
};
