import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Home from './pages/Home';
import Movies from './pages/Movies';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
