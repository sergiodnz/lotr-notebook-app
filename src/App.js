import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Opcoes from './componentes/Opcoes';
import Home from './pages/Home';
import Movies from './pages/Movies';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Opcoes />
        <Route path="/">
          <Home />
        </Route>
        <Route path="/filmes">
          <Movies />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
