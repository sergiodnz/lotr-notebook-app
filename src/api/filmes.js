import server from '../config/server';

export const obterFilmes = () => {
  return server.get('movies').then(res => {
    console.log(res.data);
    return res.data;
  });
};

export const atualizarFilme = movie => {
  return server.patch(`movies/${movie._id}`, movie).then(res => res.data);
};

export const votar = (id, option) => {
  return server.post(`movies/${id}/vote`, { option }).then(res => res.data);
};
