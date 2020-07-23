import React, { useEffect, useState } from 'react';
import { getMovies, updateMovies } from '../api/filmes';
import ListaDeFilmes, { ORDER_KEY } from '../componentes/ListaDeFilmes';
import PageContent from '../componentes/PageContent';

const Movies = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getMovies().then(filmes => setFilmes(filmes));
  }, []);

  const atualizarFilme = (id, { bookmarked, watched }) => {
    updateMovies(id, { bookmarked, watched });

    const filmesAtualizados = filmes.map(filme => {
      if (filme._id === id) {
        filme.bookmarked = bookmarked;
        filme.watched = watched;
      }
      return filme;
    });

    setFilmes(filmesAtualizados);
  };

  return (
    <PageContent name="Filmes">
      <div>
        <ListaDeFilmes
          titulo="Filmes"
          filmes={filmes.filter(filme => !(filme.watched || filme.bookmarked))}
          atualizarFilme={atualizarFilme}
          orderBy={ORDER_KEY.DEFAULT}
        />
        <ListaDeFilmes
          titulo="Assistidos"
          filmes={filmes.filter(filme => filme.watched)}
          atualizarFilme={atualizarFilme}
          order={ORDER_KEY.NAME}
        />
        <ListaDeFilmes
          titulo="Favoritos"
          filmes={filmes.filter(filme => filme.bookmarked)}
          atualizarFilme={atualizarFilme}
          order={ORDER_KEY.AWARDS}
        />
      </div>
    </PageContent>
  );
};

export default Movies;
