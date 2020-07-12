import server from './config';

export const getAllMovies = () => {
  return server.get('movies').then(res => res.data);
};

export const vote = (id, option) => {
  return server.post(`movies/${id}/vote`, { option }).then(res => res.data);
};

export const update = (id, data) => {
  return server.patch(`movies/${id}`, data).then(res => res.data);
};
