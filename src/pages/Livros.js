import React from 'react';
import PageContent from '../componentes/Comum/PageContent';
import ListaDeLivros, { CHAVE_ORDENACAO } from '../componentes/ListaDeLivros';

const Livros = () => {
  return (
    <PageContent name="Livros">
      <ListaDeLivros titulo="Acervo" ordenacaoInicial={CHAVE_ORDENACAO.NOME} />
    </PageContent>
  );
};
export default Livros;
