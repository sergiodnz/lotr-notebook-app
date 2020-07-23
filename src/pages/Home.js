import React, { Component } from 'react';
import { getMovies, updateMovies } from '../api/filmes';
import { getBooks } from '../api/livros';
import ListaDeFilmes, { ORDER_KEY } from '../componentes/ListaDeFilmes';
import ListaDeLivros from '../componentes/ListaDeLivros';
import PageContent from '../componentes/PageContent';

class Home extends Component {
  state = { filmes: [], livros: [] };

  componentDidMount() {
    getMovies().then(filmes => this.setState({ filmes }));
    getBooks().then(books => this.setState({ livros: books }));
  }

  atualizarFilme = (id, { bookmarked, watched }) => {
    updateMovies(id, { bookmarked, watched });

    const filmes = this.state.filmes.map(filme => {
      if (filme._id === id) {
        filme.bookmarked = bookmarked;
        filme.watched = watched;
      }
      return filme;
    });

    this.setState({ filmes });
  };

  render() {
    const { filmes, livros } = this.state;

    return (
      <PageContent name="Filmes / Livros / Personagens">
        <div>
          <ListaDeFilmes
            titulo="Favoritos"
            filmes={filmes.filter(filme => filme.bookmarked)}
            atualizarFilme={this.atualizarFilme}
            orderBy={ORDER_KEY.AWARDS}
          />
        </div>
        <div>
          <ListaDeLivros titulo="Livros" livros={livros} />
        </div>
      </PageContent>
    );
  }
}

export default Home;
