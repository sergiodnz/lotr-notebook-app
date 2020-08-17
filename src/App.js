import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './componentes/Rotas';
import Cabecalho from './Cabecalho';

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
