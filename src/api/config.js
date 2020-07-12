import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 1000,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
});

export default instance;
