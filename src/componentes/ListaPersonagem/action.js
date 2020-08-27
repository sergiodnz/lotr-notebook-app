import * as api from '../../api/personagem';

export const PERSONAGENS = {
  CARREGAR: 'CARREGAR_PERSONAGENS',
  PAGINACAO: 'GUARDAR_PAGINACAO',
  LOADING: 'LOADING',
};

const carregar = pagina => {
  return { type: PERSONAGENS.CARREGAR, pagina };
};

const depoisEuDecido = () => {
  return { type: PERSONAGENS.LOADING };
};

export const carregarPagina = pagina => dispatch => {
  dispatch(depoisEuDecido());
  api.obtemPersonagens(pagina.page, pagina.limit).then(data => {
    dispatch(carregar(data));
  });
};
