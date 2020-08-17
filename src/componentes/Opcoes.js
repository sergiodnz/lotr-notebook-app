import React from 'react';
import Botao from './Botao';
import { Grid } from '@material-ui/core';

const Opcoes = () => {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={3}>
          <Botao vai="/">Home</Botao>
        </Grid>
        <Grid item xs={3}>
          <Botao vai="/filmes">Filmes</Botao>
        </Grid>
        <Grid item xs={3}>
          <Botao vai="/livros">Livros</Botao>
        </Grid>
        <Grid item xs={3}>
          <Botao vai="/personagens">Personagens</Botao>
        </Grid>
      </Grid>
    </div>
  );
};

export default Opcoes;
