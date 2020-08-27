import React from 'react';
import PageContent from '../componentes/PageContent';
import ListaDeLivros, { CHAVE_ORDENACAO } from '../componentes/ListaDeLivros';

const Livros = () => {
  return (
    <PageContent name="Livros">
      <ListaDeLivros
        titulo="LOTR Acervo"
        ordenacaoInicial={CHAVE_ORDENACAO.NOME}
      />
    </PageContent>
  );
};
export default Livros;
