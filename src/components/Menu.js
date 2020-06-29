import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu-items">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
