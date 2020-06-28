import React from 'react';
import Home from './Home';
import Movies from './Movies';

const getCurrentPage = () => {
  const path = window.location.pathname;
  switch (path) {
    case '/':
      return <Home />;
    case '/movies':
      return <Movies />;
    default:
      return <Home />;
  }
};

const App = () => {
  return (
    <div className="app">
      <div className="menu">
        <h3>Menu</h3>
        <ul className="menu-items">
          <li className="menu-item">
            <a href="/">Home</a>
          </li>
          <li className="menu-item">
            <a href="/movies">Movies</a>
          </li>
        </ul>
      </div>
      {getCurrentPage()}
    </div>
  );
};

export default App;
