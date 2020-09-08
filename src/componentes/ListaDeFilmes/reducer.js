import { FILMES } from './action';

//atualizar a store aqui.. e evitar copiar e colar tudo.. cuidado
const movies = (state = [], action) => {
  switch (action.type) {
    case FILMES.CARREGAR:
      return action.movies;
    case FILMES.ATUALIZAR:
      return state.map(filme =>
        filme._id === action.movie._id ? action.movie : filme
      );
    default:
      return state;
  }
};

export default movies;
