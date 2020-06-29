import React from 'react';
import Home from '../pages/Home';
import Movies from '../pages/Movies';

const Router = () => {
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

export default Router;