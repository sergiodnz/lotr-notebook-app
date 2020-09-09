import React from 'react';
import PageContent from '../componentes/Comum/PageContent';
import ListaPersonagem from '../componentes/ListaPersonagem';
import Grid from '@material-ui/core/Grid';
import ListaDeFilmes, { ORDER_KEY } from '../componentes/ListaDeFilmes';
import { useSelector } from 'react-redux';
import ListaDeLivros, { CHAVE_ORDENACAO } from '../componentes/ListaDeLivros';
import { Paper, Card } from '@material-ui/core';

const Home = () => {
  const filmes = useSelector(state => state.movies);

  return (
    <PageContent name="Filmes / Livros / Personagens">
      <Grid container>
        <Grid item xs={12}>
          <ListaPersonagem />
        </Grid>
        <Grid item xs={12}>
          <ListaDeFilmes
            titulo="Meus Filmes Favoritos"
            filmes={filmes.filter(filme => filme.bookmarked)}
            orderBy={ORDER_KEY.AWARDS}
          />
        </Grid>
        <Grid item xs={12}>
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
