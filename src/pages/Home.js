import React from 'react';
import PageContent from '../componentes/PageContent';
import ListaPersonagem from '../componentes/ListaPersonagem';

const Home = () => {
  return (
    <PageContent name="Filmes / Livros / Personagens">
      <ListaPersonagem />
    </PageContent>
  );
};

export default Home;
