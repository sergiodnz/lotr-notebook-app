import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { carregarLivros } from './action/livros';
import { carregarPagina } from './action/personagens';
import { loadMovies } from './action/movies';
import * as ApiFilmes from './api/filmes';
import * as ApiLivros from './api/livros';
import * as ApiPersonagens from './api/personagens';
import Opcoes from './componentes/Opcoes';
import Rotas from './componentes/Rotas';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    ApiLivros.obterLivros().then(livros => dispatch(carregarLivros(livros)));
    ApiFilmes.getMovies().then(filmes => dispatch(loadMovies(filmes)));
    ApiPersonagens.obtemPersonagens(0, 10).then(data => {
      dispatch(carregarPagina(data));
    });
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Opcoes />
        <Rotas />
      </BrowserRouter>
    </div>
  );
};

export default App;
