import React from 'react';
import { useSelector } from 'react-redux';
import ListaDeFilmes, { ORDER_KEY } from '../componentes/ListaDeFilmes';
import PageContent from '../componentes/PageContent';

const Movies = () => {
  const filmes = useSelector(state => state.movies);

  return (
    <PageContent name="Filmes">
      <div>
        <ListaDeFilmes
          titulo="Filmes"
          filmes={filmes.filter(filme => !(filme.watched || filme.bookmarked))}
          orderBy={ORDER_KEY.DEFAULT}
        />
        <ListaDeFilmes
          titulo="Assistidos"
          filmes={filmes.filter(filme => filme.watched)}
          order={ORDER_KEY.NAME}
        />
        <ListaDeFilmes
          titulo="Favoritos"
          filmes={filmes.filter(filme => filme.bookmarked)}
          order={ORDER_KEY.AWARDS}
        />
      </div>
    </PageContent>
  );
};

export default Movies;
