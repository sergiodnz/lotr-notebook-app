import server from '../config/server';

export const procurarPersonagem = name => {
  return server.get(`/characters/name/${name}`).then(res => res.data);
};

export const obterPersonagem = id => {
  return server.get(`/characters/${id}`).then(res => res.data);
};

export const obtemPersonagens = (numeroPagina, limite) => {
  return server
    .get(`/characters?page=${numeroPagina}&limit=${limite}`)
    .then(res => res.data);
};
