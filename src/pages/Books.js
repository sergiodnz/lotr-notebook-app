import React, { Component } from 'react';
import { getBooks } from '../api/livros';
import ListaDeLivros from '../componentes/ListaDeLivros';

class Books extends Component {
  state = { livros: [] };

  componentDidMount() {
    getBooks().then(books => this.setState({ livros: books }));
  }

  render() {
    const livros = this.state.livros;
    return (
      <div>
        <ListaDeLivros titulo="Livros" livros={livros} />
      </div>
    );
  }
}
export default Books;
