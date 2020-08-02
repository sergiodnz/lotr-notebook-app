export const LIVROS = {
  CARREGAR: 'CARREGAR_LIVROS',
  ATUALIZA_REVISAO: 'ATUALIZA_REVISAO',
  ADICIONA_REVISAO: 'ADICIONA_REVISAO',
  APAGA_REVISAO: 'APAGA_REVISAO',
};

export const carregarLivros = livros => {
  return { type: LIVROS.CARREGAR, livros };
};

export const adicionaRevisao = (idLivro, revisao) => {
  return { type: LIVROS.ADICIONA_REVISAO, idLivro, revisao };
};

export const atualizaRevisao = (idLivro, revisao) => {
  return { type: LIVROS.ATUALIZA_REVISAO, idLivro, revisao };
};

export const apagaRevisao = (idLivro, idRevisao) => {
  return { type: LIVROS.APAGA_REVISAO, idLivro, idRevisao };
};
