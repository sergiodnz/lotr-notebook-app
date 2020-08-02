import server from '../config/server';

export const searchCharacter = name => {
  return server.get(`/characters/name/${name}`).then(res => res.data);
};

export const getCharacter = id => {
  return server.get(`/characters/${id}`).then(res => res.data);
};

export const obtemPersonagens = (numeroPagina, limite) => {
  console.log({ numeroPagina, limite });
  return server
    .get(`/characters?page=${numeroPagina}&limit=${limite}`)
    .then(res => {
      return res.data;
    });
};
