import * as api from '../../api/livros';

export const LIVROS = {
  CARREGAR: 'CARREGAR_LIVROS',
};

const carregar = livros => {
  return { type: LIVROS.CARREGAR, livros };
};

export const obterLivros = livros => dispatch => {
  api.obterLivros().then(data => {
    dispatch(carregar(data));
  });
};
