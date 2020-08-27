import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho';
import Rotas from './componentes/Rotas';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Cabecalho name="The Lord of The Rings" />
        <Rotas />
      </BrowserRouter>
    </div>
  );
};

export default App;
