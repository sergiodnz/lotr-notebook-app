import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Books from '../pages/Books';
import DetalheLivro from '../pages/DetalheLivro';
import Home from '../pages/Home';
import Movies from '../pages/Movies';

const Rotas = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/filmes">
        <Movies />
      </Route>
      <Route path="/livros/:id">
        <DetalheLivro />
      </Route>
      <Route path="/livros">
        <Books />
      </Route>
    </Switch>
  );
};

export default Rotas;
