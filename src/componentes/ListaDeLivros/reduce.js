import { LIVROS } from './action';

const estadoInicial = [];

const personagens = (state = estadoInicial, action) => {
  switch (action.type) {
    case LIVROS.CARREGAR:
      return action.livros;
    default:
      return state;
  }
};

export default personagens;
