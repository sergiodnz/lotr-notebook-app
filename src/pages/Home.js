import React from 'react';
import PageContent from '../componentes/Comum/PageContent';
import ListaPersonagem from '../componentes/ListaPersonagem';
import Grid from '@material-ui/core/Grid';

const Home = () => {
  return (
    <PageContent name="Filmes / Livros / Personagens">
      <Grid container>
        <Grid item xs={12} md={4}>
          <ListaPersonagem />
        </Grid>
        <Grid item xs={12} md={4}>
          Quadro 2
        </Grid>
        <Grid item xs={12} md={4}>
          Quadro 3
        </Grid>
      </Grid>
    </PageContent>
  );
};

export default Home;
