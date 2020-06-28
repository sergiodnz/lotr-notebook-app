import React from 'react';
import Home from './Home';
import Movies from './Movies';

const App = () => {
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

export default App;
