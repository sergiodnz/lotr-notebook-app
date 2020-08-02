export const PERSONAGENS = {
  CARREGAR: 'CARREGAR_PERSONAGENS',
};

export const carregarPagina = pagina => {
  return { type: PERSONAGENS.CARREGAR, pagina };
};
