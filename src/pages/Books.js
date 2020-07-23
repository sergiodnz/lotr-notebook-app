import React, { useEffect, useState } from 'react';
import { getBooks } from '../api/livros';
import ListaDeLivros from '../componentes/ListaDeLivros';
import PageContent from '../componentes/PageContent';

const Books = () => {
  //class ListaDeLivros extends Component {
  // cria a lista com valores default para ordenacao

  const [livros, setLivros] = useState([]);

  useEffect(() => {
    getBooks().then(books => setLivros(books));
  }, []);

  return (
    <PageContent name="Livros">
      <div>
        <div>
          <ListaDeLivros titulo="Livros" livros={livros} />
        </div>
      </div>
    </PageContent>
  );
};
export default Books;
