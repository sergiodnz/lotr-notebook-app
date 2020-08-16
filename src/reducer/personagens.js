import { PERSONAGENS } from '../action/personagens';

//atualizar a store aqui.. e evitar copiar e colar tudo.. cuidado
const pagina = (state = [], action) => {
  switch (action.type) {
    case PERSONAGENS.CARREGAR:
      return action.pagina;
    default:
      return state;
  }
};

export default pagina;
