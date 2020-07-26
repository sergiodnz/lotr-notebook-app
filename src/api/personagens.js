import server from './config';

export const searchCharacter = name => {
  return server.get(`/characters/name/${name}`).then(res => res.data);
};

export const getCharacter = id => {
  return server.get(`/characters/${id}`).then(res => res.data);
};

export const getCharacters = (page, limit) => {
  return server
    .get(`/characters?page=${page}&limit=${limit}`)
    .then(res => res.data);
};