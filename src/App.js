import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Opcoes from './componentes/Opcoes';
import Rotas from './componentes/Rotas';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Opcoes />
        <Rotas />
      </BrowserRouter>
    </div>
  );
};

export default App;
