import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import * as API from './api/movies';

import Menu from './components/Menu';
import Home from './pages/Home';
import Movies from './pages/Movies';

const App = () => {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    API.getAllMovies().then(data => setAllMovies(data));
  }, []);

  const updateMovie = (id, callback) => {
    const movies = allMovies.map(movie =>
      movie._id === id ? callback(movie) : movie
    );
    setAllMovies(movies);
  };

  const handleUpdateMovie = (id, shelf) => {
    updateMovie(id, movie => ({ ...movie, [shelf]: true }));
  };

  const handleResetMovie = id => {
    updateMovie(id, movie => ({ ...movie, bookmarked: false, watched: false }));
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <Route exact path="/">
          <Home movies={allMovies} onResetMovie={handleResetMovie} />
        </Route>
        <Route path="/movies">
          <Movies
            allMovies={allMovies}
            onResetMovie={handleResetMovie}
            onUpdateMovie={handleUpdateMovie}
          />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
