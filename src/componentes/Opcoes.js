import React from 'react';
import { Link } from 'react-router-dom';

const Opcoes = () => {
  return (
    <div className="menu">
      <h3>Opções</h3>
      <ul className="menu-items">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/filmes">Filmes</Link>
        </li>
      </ul>
    </div>
  );
};

export default Opcoes;
