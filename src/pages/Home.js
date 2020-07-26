import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/filmes';
import { getBooks } from '../api/livros';
import ListaDeFilmes, { ORDER_KEY } from '../componentes/ListaDeFilmes';
import ListaDeLivros from '../componentes/ListaDeLivros';
import PageContent from '../componentes/PageContent';
import ListaPersonagens from '../componentes/ListaPersonagens';

const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    getMovies().then(filmes => setFilmes(filmes));
    getBooks().then(books => setLivros(books));
  }, []);

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
          livros={livros.filter(
            livro => livro.reviews && livro.reviews.length > 0
          )}
        />
      </div>
    </PageContent>
  );
};

export default Home;
