import React, { Component } from 'react';
import { getMovies, updateMovies } from '../api/filmes';
import ListaDeFilmes, { ORDER_KEY } from '../componentes/ListaDeFilmes';
import TituloPagina from '../componentes/TituloPagina';

class Movies extends Component {
  state = { filmes: [] };

  componentDidMount() {
    getMovies().then(filmes => this.setState({ filmes }));
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
    const { filmes } = this.state;

    return (
      <div>
        <TituloPagina titulo="Filmes" />
        <div>
          <ListaDeFilmes
            titulo="Filmes"
            filmes={filmes.filter(
              filme => !(filme.watched || filme.bookmarked)
            )}
            atualizarFilme={this.atualizarFilme}
            orderBy={ORDER_KEY.DEFAULT}
          />
          <ListaDeFilmes
            titulo="Assistidos"
            filmes={filmes.filter(filme => filme.watched)}
            atualizarFilme={this.atualizarFilme}
            orderBy={ORDER_KEY.NAME}
          />
          <ListaDeFilmes
            titulo="Favoritos"
            filmes={filmes.filter(filme => filme.bookmarked)}
            atualizarFilme={this.atualizarFilme}
            orderBy={ORDER_KEY.AWARDS}
          />
        </div>
      </div>
    );
  }
}
export default Movies;
