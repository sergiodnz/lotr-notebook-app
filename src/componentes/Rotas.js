import React from 'react';
import { Route } from 'react-router-dom';
import Books from '../pages/Books';
import Home from '../pages/Home';
import Movies from '../pages/Movies';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/filmes">
        <Movies />
      </Route>
      <Route path="/livros">
        <Books />
      </Route>
    </BrowserRouter>
  );
};

export default Rotas;
