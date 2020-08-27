import { PERSONAGENS } from './action';

const estadoInicial = {
  data: [],
  page: 0,
  limit: 10,
  total: 0,
  loading: false,
};

//atualizar a store aqui.. e evitar copiar e colar tudo.. cuidado
const personagens = (state = estadoInicial, action) => {
  switch (action.type) {
    case PERSONAGENS.CARREGAR:
      return { ...action.pagina, loading: false };
    case PERSONAGENS.LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default personagens;
