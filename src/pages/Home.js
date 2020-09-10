import { Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { useSelector } from 'react-redux';
import PageContent from '../componentes/Comum/PageContent';
import ListaDeFilmes, { ORDER_KEY } from '../componentes/ListaDeFilmes';
import ListaDeLivros, { CHAVE_ORDENACAO } from '../componentes/ListaDeLivros';
import ListaPersonagem from '../componentes/ListaPersonagem';

const Home = () => {
  const filmes = useSelector(state => state.movies);

  return (
    <PageContent name="Filmes / Livros / Personagens">
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} md={4}>
          <ListaPersonagem />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <ListaDeFilmes
              titulo="Meus Filmes Favoritos"
              filmes={filmes.filter(filme => filme.bookmarked)}
              orderBy={ORDER_KEY.AWARDS}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <ListaDeLivros
              titulo="Meu Acervo"
              ordenacaoInicial={CHAVE_ORDENACAO.NOME}
            />
          </Card>
        </Grid>
      </Grid>
    </PageContent>
  );
};

export default Home;
