import React, { Component } from 'react';
import { getBooks } from '../api/livros';
import ListaDeLivros from '../componentes/ListaDeLivros';
import TituloPagina from '../componentes/TituloPagina';

class Books extends Component {
  state = { livros: [] };

  componentDidMount() {
    getBooks().then(books => this.setState({ livros: books }));
  }

  render() {
    const livros = this.state.livros;
    return (
      <div>
        <TituloPagina titulo="Livros" />
        <div>
          <ListaDeLivros titulo="Livros" livros={livros} />
        </div>
      </div>
    );
  }
}
export default Books;
