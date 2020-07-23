import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Books from '../pages/Books';
import DetalheLivro from '../pages/DetalheLivro';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Personagens from '../pages/Personagens';
import DetalhePersonagem from '../pages/DetalhePersonagem';

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
      <Route path="/personagens/:id">
        <DetalhePersonagem />
      </Route>
      <Route path="/personagens">
        <Personagens />
      </Route>
    </Switch>
  );
};

export default Rotas;
