import React, { Component } from 'react';
import { getMovies, updateMovies } from '../api/filmes';
import ListaDeFilmes, { ORDER_KEY } from '../componentes/ListaDeFilmes';

class Movies extends Component {
  state = { filmes: [] };

  componentDidMount() {
    getMovies().then(movies => this.setState({ filmes: movies }));
  }

  atualizarFilme = (id, { bookmarked, watched }) => {
    const filmes = this.state.filmes.map(filme => {
      if (filme._id === id) {
        filme.bookmarked = bookmarked;
        filme.watched = watched;
        updateMovies(filme._id, { bookmarked, watched });
      }
      return filme;
    });

    this.setState({ filmes });
  };

  render() {
    const todosOsFilmes = this.state.filmes;
    const filmes = todosOsFilmes.filter(
      filme => !(filme.watched || filme.bookmarked)
    );

    const favoritos = todosOsFilmes.filter(filme => filme.bookmarked);
    const assitidos = todosOsFilmes.filter(filme => filme.watched);

    return (
      <div>
        <ListaDeFilmes
          titulo="Filmes"
          filmes={filmes}
          atualizarFilme={this.atualizarFilme}
          ordenacao={ORDER_KEY.DEFAULT}
        />
        <ListaDeFilmes
          titulo="Assistidos"
          filmes={assitidos}
          atualizarFilme={this.atualizarFilme}
          ordenacao={ORDER_KEY.NAME}
        />
        <ListaDeFilmes
          titulo="Favoritos"
          filmes={favoritos}
          atualizarFilme={this.atualizarFilme}
          ordenacao={ORDER_KEY.AWARDS}
        />
      </div>
    );
  }
}
export default Movies;
