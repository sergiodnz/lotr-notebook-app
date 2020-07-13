import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Book from './pages/Book';
import Books from './pages/Books';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Review from './pages/Review';

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
        <Route exact path="/books/:id/review">
          <Review />
        </Route>
        <Route exact path="/books/:id">
          <Book />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
