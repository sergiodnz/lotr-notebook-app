import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { carregarLivros } from './action/livros';
import { carregarPagina } from './action/personagens';
import { carregarFilmes } from './action/movies';
import Opcoes from './componentes/Opcoes';
import Rotas from './componentes/Rotas';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(carregarLivros());
    dispatch(carregarFilmes());
    dispatch(carregarPagina({ page: 0, limit: 10 }));
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
