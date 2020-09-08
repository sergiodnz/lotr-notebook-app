import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { atualizarFilme, carregarFilmes } from './action';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import VisibilityIcon from '@material-ui/icons/Visibility';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import SortIcon from '@material-ui/icons/Sort';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';

// cria enum para as chaves de ordenação disponíveis
export const ORDER_KEY = {
  AWARDS: 'academyAwardWins',
  NAME: 'name',
  DEFAULT: '_id',
};

// cria enum para multiplicador usado para mudar a direcao da ordenacao
export const ORDER_DIRECTION = {
  DEFAULT: 1,
  REVERSE: -1,
};

const ListaDeFilmes = ({ titulo, filmes, order }) => {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = React.useState(titulo);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const atualizar = (_id, { bookmarked, watched }) => {
    dispatch(atualizarFilme({ _id, bookmarked, watched }));
  };

  // cria a lista com valores default para ordenacao
  const [orderBy, setOrderBy] = useState(ORDER_KEY.DEFAULT);
  const [orderDirection, setOrderDirection] = useState(ORDER_DIRECTION.DEFAULT);

  // Seta a ordenação oriunda do parametro do componente
  useEffect(() => {
    dispatch(carregarFilmes());
    setOrderBy(order);
  }, [order, dispatch]);

  // metodo para ordenar a lista
  const obtemOrdenacaoLista = (b, a, order, direction) => {
    // const orderDirection = orderDirection;
    switch (order) {
      case ORDER_KEY.AWARDS:
        return (b[ORDER_KEY.AWARDS] - a[ORDER_KEY.AWARDS]) * direction;
      case ORDER_KEY.NAME:
        return (a[ORDER_KEY.NAME] > b[ORDER_KEY.NAME] ? 1 : -1) * direction;
      default:
        return ORDER_KEY.DEFAULT;
    }
  };

  // mudança de ordenação default ou reversa
  const mudaOrdenacao = order => {
    const direction =
      orderBy === order
        ? orderDirection * ORDER_DIRECTION.REVERSE
        : ORDER_DIRECTION.DEFAULT;
    setOrderBy(order);
    setOrderDirection(direction);
  };

  //  const { titulo, filmes, atualizarFilme } = this.props;

  const listaFilmes = filmes.slice().sort((a, b) => {
    return obtemOrdenacaoLista(b, a, orderBy, orderDirection);
  });

  const btnAwardsAscDesc =
    orderBy === ORDER_KEY.AWARDS &&
    orderDirection === ORDER_DIRECTION.DEFAULT ? (
      <SortIcon color="primary" />
    ) : (
      <SortIcon color="secondary" />
    );
  const btnNameAscDesc = !(
    orderBy === ORDER_KEY.NAME && orderDirection === ORDER_DIRECTION.DEFAULT
  ) ? (
    <SortByAlphaIcon color="secondary" />
  ) : (
    <SortByAlphaIcon color="primary" />
  );

  return (
    <>
      {listaFilmes.length > 0 && (
        <Accordion
          square
          expanded={expanded === titulo}
          onChange={handleChange(titulo)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="h6">{titulo}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} padding={2}>
              <Grid item xs={12}>
                {order === ORDER_KEY.AWARDS && (
                  <Button onClick={() => mudaOrdenacao(ORDER_KEY.AWARDS)}>
                    {btnAwardsAscDesc}
                  </Button>
                )}
                {order === ORDER_KEY.NAME && (
                  <Button onClick={() => mudaOrdenacao(ORDER_KEY.NAME)}>
                    {btnNameAscDesc}
                  </Button>
                )}
              </Grid>
              {listaFilmes.map(movie => {
                // constantes para exibir ou ocultar botoes de acordo com a lista a ser exibida
                const showCancelar = movie.watched || movie.bookmarked;
                const showAdicionar = !(movie.watched || movie.bookmarked);
                return (
                  <Grid key={movie._id} item xs={12}>
                    <Card>
                      <CardContent>
                        <Typography variant="subtitle1">
                          {movie.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          gutterBottom
                        >
                          Academy Awards: {movie.academyAwardWins}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {showAdicionar && (
                          <Button
                            onClick={() =>
                              atualizar(movie._id, {
                                bookmarked: true,
                                watched: false,
                              })
                            }
                          >
                            <BookmarkIcon />
                          </Button>
                        )}
                        {showAdicionar && (
                          <Button
                            onClick={() =>
                              atualizar(movie._id, {
                                bookmarked: false,
                                watched: true,
                              })
                            }
                          >
                            <VisibilityIcon />
                          </Button>
                        )}
                        {showCancelar && (
                          <Button
                            onClick={() =>
                              atualizar(movie._id, {
                                bookmarked: false,
                                watched: false,
                              })
                            }
                          >
                            <RemoveCircleIcon />
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

export default ListaDeFilmes;
