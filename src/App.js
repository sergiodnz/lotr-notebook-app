import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho';
import Rotas from './componentes/Rotas';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Cabecalho name="The Lord of The Rings" />
        <Rotas />
      </BrowserRouter>
    </>
  );
};

export default App;
