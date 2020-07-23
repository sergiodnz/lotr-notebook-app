/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from 'react';

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

const ListaDeFilmes = ({ titulo, filmes, atualizarFilme, order }) => {
  // cria a lista com valores default para ordenacao
  const [orderBy, setOrderBy] = useState(ORDER_KEY.DEFAULT);
  const [orderDirection, setOrderDirection] = useState(ORDER_DIRECTION.DEFAULT);

  // Seta a ordenação oriunda do parametro do componente
  useEffect(() => {
    setOrderBy(order);
  }, [order]);

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
    orderBy === ORDER_KEY.AWARDS && orderDirection === ORDER_DIRECTION.DEFAULT
      ? 'asc'
      : 'desc';
  const btnNameAscDesc = !(
    orderBy === ORDER_KEY.NAME && orderDirection === ORDER_DIRECTION.DEFAULT
  )
    ? 'asc'
    : 'desc';

  return (
    <div>
      <div className="movie-list">
        <h3>{titulo}</h3>
        <button
          className="sort-button"
          onClick={() => mudaOrdenacao(ORDER_KEY.AWARDS)}
        >
          <i className={'fa fa-sort-amount-' + btnAwardsAscDesc}></i>
        </button>
        <button
          className="sort-button"
          onClick={() => mudaOrdenacao(ORDER_KEY.NAME)}
        >
          <i className={'fa fa-sort-alpha-' + btnNameAscDesc}></i>
        </button>

        <ul>
          {listaFilmes.map(movie => {
            // constantes para exibir ou ocultar botoes de acordo com a lista a ser exibida
            const showCancelar = movie.watched || movie.bookmarked;
            const showAdicionar = !(movie.watched || movie.bookmarked);
            return (
              <li className="movie-list-item" key={movie._id}>
                <div>{movie.name}</div>
                <div>Academy Awards: {movie.academyAwardWins}</div>
                {showAdicionar && (
                  <span>
                    <button
                      onClick={() =>
                        atualizarFilme(movie._id, {
                          bookmarked: true,
                          watched: false,
                        })
                      }
                    >
                      <i className="fa fa-star"></i>
                    </button>
                  </span>
                )}
                {showAdicionar && (
                  <span>
                    <button
                      onClick={() =>
                        atualizarFilme(movie._id, {
                          bookmarked: false,
                          watched: true,
                        })
                      }
                    >
                      <i className="fa fa-check"></i>
                    </button>
                  </span>
                )}
                {showCancelar && (
                  <span>
                    <button
                      onClick={() =>
                        atualizarFilme(movie._id, {
                          bookmarked: false,
                          watched: false,
                        })
                      }
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListaDeFilmes;
