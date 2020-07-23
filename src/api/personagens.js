import server from './config';

export const searchCharacter = name => {
  return server.get(`/characters/name/${name}`).then(res => res.data);
};

export const getCharacter = id => {
  return server.get(`/characters/${id}`).then(res => res.data);
};
