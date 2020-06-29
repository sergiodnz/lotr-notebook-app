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

  const handleUpdateMovie = (id, shelf) => {
    const updatedMovies = allMovies.map(movie => {
      if (movie._id === id) {
        return { ...movie, [shelf]: true };
      }
      return movie;
    });
    setAllMovies(updatedMovies);
  };

  const handleResetMovie = id => {
    const updatedMovies = allMovies.map(movie => {
      if (movie._id === id) {
        return { ...movie, bookmarked: false, watched: false };
      }
      return movie;
    });
    setAllMovies(updatedMovies);
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
