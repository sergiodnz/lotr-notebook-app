import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Livros from '../pages/Livros';
import Movies from '../pages/Movies';
import Personagens from '../pages/Personagens';

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
        <Livros />
      </Route>
      <Route path="/livros">
        <Livros />
      </Route>
      <Route path="/personagens/:id">
        <Personagens />
      </Route>
      <Route path="/personagens">
        <Personagens />
      </Route>
    </Switch>
  );
};

export default Rotas;
