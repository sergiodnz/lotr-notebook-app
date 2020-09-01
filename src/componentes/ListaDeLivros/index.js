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
  title: {
    fontSize: 14,
  },
});

const ListaDeLivros = ({ titulo, ordenacaoInicial }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const livros = useSelector(store => {
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

  const mediaRevisoes = revisoes => {
    if (revisoes) {
      const arr = { qtde: 0, soma: 0 };
      revisoes.map(review => {
        arr.soma += review.stars;
        arr.qtde += 1;
        return arr;
      });
      return arr.soma / arr.qtde;
    } else {
      return 0;
    }
  };

  const melhorRevisao = revisoes => {
    const arr = { maior: 0, text: 'Escreva a primeira revisão!' };
    if (revisoes) {
      revisoes.map(review => {
        if (review.stars > arr.maior) {
          arr.maior = review.stars;
          arr.text = review.text;
        }
        return review;
      });
    }
    return arr.text;
  };
  return (
    <Grid container spacing={2} padding={2}>
      {listaLivros.map((livro, index) => {
        return (
          <Grid key={livro._id} item xs={12} md={4}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Revisões: {livro.reviewCount}
                </Typography>
                <Rating
                  name="read-only"
                  value={mediaRevisoes(livro.reviews)}
                  readOnly
                />
                <Typography variant="h5" component="h2">
                  {livro.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {melhorRevisao(livro.reviews)}
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
