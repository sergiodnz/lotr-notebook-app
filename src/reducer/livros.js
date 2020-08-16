import { LIVROS } from '../action/livros';
//atualizar a store aqui..
const livros = (state = [], action) => {
  switch (action.type) {
    case LIVROS.CARREGAR:
      return action.livros;

    case LIVROS.ADICIONA_REVISAO:
      return state.map(livro =>
        livro._id === action.revisao.bookId
          ? {
              _id: livro._id,
              name: livro.name,
              reviews: [action.revisao].concat(livro.reviews),
            }
          : livro
      );

    case LIVROS.ATUALIZA_REVISAO:
      return state.map(livro =>
        livro._id === action.revisao.bookId
          ? {
              _id: livro._id,
              name: livro.name,
              reviews: [action.revisao].concat(
                livro.reviews.filter(r => r._id !== action.revisao._id)
              ),
            }
          : livro
      );
    case LIVROS.APAGA_REVISAO:
      const novoEstado = state.map(livro => {
        console.log(action);
        return livro._id === action.bookId
          ? {
              _id: livro._id,
              name: livro.name,
              reviews: livro.reviews.filter(r => r._id !== action.deletedId),
            }
          : livro;
      });
      return novoEstado;
    default:
      return state;
  }
};

export default livros;
