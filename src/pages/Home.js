import React from 'react';
import { useSelector } from 'react-redux';
import ListaDeFilmes, { ORDER_KEY } from '../componentes/ListaDeFilmes';
import ListaDeLivros from '../componentes/ListaDeLivros';
import ListaPersonagens from '../componentes/ListaPersonagens';
import PageContent from '../componentes/PageContent';

const Home = () => {
  const filmes = useSelector(state => state.movies);

  return (
    <PageContent name="Filmes / Livros / Personagens">
      <div>
        <ListaPersonagens />
      </div>
      <div>
        <ListaDeFilmes
          titulo="Favoritos"
          filmes={filmes.filter(filme => filme.bookmarked)}
          orderBy={ORDER_KEY.AWARDS}
        />
      </div>
      <div>
        <ListaDeLivros
          titulo="Livros"
          filterBy={livro => livro.reviews && livro.reviews.length > 0}
        />
      </div>
    </PageContent>
  );
};

export default Home;
