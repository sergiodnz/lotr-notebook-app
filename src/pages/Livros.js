import React from 'react';
import ListaDeLivros, { CHAVE_ORDENACAO } from '../componentes/ListaDeLivros';
import PageContent from '../componentes/PageContent';

const Livros = () => {
  return (
    <PageContent name="Livros">
      <div>
        <div>
          <ListaDeLivros
            titulo="Livros"
            ordenacaoInicial={CHAVE_ORDENACAO.NOME}
            filterBy={livro => livro}
          />
        </div>
      </div>
    </PageContent>
  );
};
export default Livros;
