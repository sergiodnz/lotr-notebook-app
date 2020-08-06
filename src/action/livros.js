import * as ApiLivros from '../api/livros';
export const LIVROS = {
  CARREGAR: 'CARREGAR_LIVROS',
  ATUALIZA_REVISAO: 'ATUALIZA_REVISAO',
  ADICIONA_REVISAO: 'ADICIONA_REVISAO',
  APAGA_REVISAO: 'APAGA_REVISAO',
};

const carregar = livros => {
  return { type: LIVROS.CARREGAR, livros };
};

const adicionar = revisao => {
  return { type: LIVROS.ADICIONA_REVISAO, revisao };
};

const apagar = (bookId, deletedId) => {
  return { type: LIVROS.APAGA_REVISAO, bookId, deletedId };
};

const atualizar = revisao => {
  return { type: LIVROS.ATUALIZA_REVISAO, revisao };
};

export const carregarLivros = () => dispatch => {
  ApiLivros.obterLivros().then(livros => dispatch(carregar(livros)));
};

export const adicionarRevisao = revisaoNova => dispatch => {
  ApiLivros.adicionarRevisao(revisaoNova).then(revisao => {
    console.log(revisao);
    dispatch(adicionar(revisao));
  });
};

export const atualizarRevisao = revisaoAtualizada => dispatch => {
  ApiLivros.atualizarRevisao(revisaoAtualizada).then(revisao => {
    dispatch(atualizar(revisao));
  });
};

export const apagarRevisao = revisao => dispatch => {
  ApiLivros.apagarRevisao(revisao).then(data => {
    dispatch(apagar(revisao.bookId, data.deleted));
  });
};
