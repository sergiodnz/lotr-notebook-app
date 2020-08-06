import * as ApiFilmes from '../api/filmes';

export const FILMES = {
  CARREGAR: 'CARREGAR_FILMES',
  ATUALIZAR: 'ATUALIZAR_FILME',
};

const carregar = movies => {
  return { type: FILMES.CARREGAR, movies };
};

const atualizar = movie => {
  return { type: FILMES.ATUALIZAR, movie };
};

export const carregarFilmes = () => dispatch => {
  ApiFilmes.obterFilmes().then(filmes => dispatch(carregar(filmes)));
};

export const atualizarFilme = filme => dispatch => {
  ApiFilmes.atualizarFilme(filme).then(filmeAtualizado => {
    dispatch(atualizar(filmeAtualizado));
  });
};
