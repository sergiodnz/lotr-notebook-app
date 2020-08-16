import * as ApiPersonagens from '../api/personagens';

export const PERSONAGENS = {
  CARREGAR: 'CARREGAR_PERSONAGENS',
};

const carregar = pagina => {
  return { type: PERSONAGENS.CARREGAR, pagina };
};

export const carregarPagina = pagina => dispatch => {
  ApiPersonagens.obtemPersonagens(pagina.page, pagina.limit).then(data => {
    dispatch(carregar(data));
  });
};
