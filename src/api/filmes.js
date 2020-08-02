import server from '../config/server';

export const getMovies = () => {
  return server.get('movies').then(res => res.data);
};

export const updateMovies = (id, data) => {
  return server.patch(`movies/${id}`, data).then(res => res.data);
};

export const vote = (id, option) => {
  return server.post(`movies/${id}/vote`, { option }).then(res => res.data);
};
