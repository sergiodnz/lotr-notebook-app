import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Books from './pages/Books';

const App = () => {
  return (
    <div className="app">
      <h1>The Lord of The Rings Notebook</h1>
      <BrowserRouter>
        <Menu />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
