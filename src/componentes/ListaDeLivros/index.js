import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { obterLivros } from './action';

export const CHAVE_ORDENACAO = {
  REVIEWS: 'reviewCount',
  NOME: 'name',
  PADRAO: '_id',
  //  PREMIOS: 'awards',
};

export const SENTIDO_ORDENACAO = {
  PADRAO: 1,
  INVERSO: -1,
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ListaDeLivros = ({ titulo, ordenacaoInicial }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const livros = useSelector(store => {
    console.log(store.livros);
    return store.livros;
  });

  const [ordenacao, setOrdenacao] = useState(CHAVE_ORDENACAO.PADRAO);
  const sentido = SENTIDO_ORDENACAO.REVIEWS;

  useEffect(() => {
    dispatch(obterLivros());
    setOrdenacao(ordenacaoInicial);
  }, [dispatch, ordenacaoInicial]);

  const obtemOrdenacaoLista = (b, a, ordenacao, sentido) => {
    return (a[ordenacao] > b[ordenacao] ? 1 : -1) * sentido;
  };

  const listaLivros = livros.slice().sort((a, b) => {
    return obtemOrdenacaoLista(b, a, ordenacao, sentido);
  });
  let i = 2;
  return (
    <Grid container spacing={2} padding={2}>
      {listaLivros.map(livro => {
        i = i + 1;
        return (
          <Grid key={livro._id} item xs={4} lg={4}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {livro.reviewCount} Revisões
                </Typography>
                <Rating name="read-only" value={i} readOnly />
                <Typography variant="h5" component="h2">
                  {livro.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {'"É bom demais Junio"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} to={`/livros/${livro._id}`}>
                  Detalhe
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ListaDeLivros;
