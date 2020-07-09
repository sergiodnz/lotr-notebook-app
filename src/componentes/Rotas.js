import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';

const Rotas = () => {
  return (
    <Router>
      <Switch>
        <Route path="/filmes">
          <Movies />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Rotas;
