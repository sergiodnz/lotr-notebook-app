import React, { Component } from 'react';

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

class ListaDeFilmes extends Component {
  // cria a lista com valores default para ordenacao
  state = {
    orderBy: ORDER_KEY.DEFAULT,
    orderDirection: ORDER_DIRECTION.DEFAULT,
  };

  // Seta a ordenação oriunda do parametro do componente
  componentDidMount() {
    const { orderBy } = this.props;
    this.setState({
      orderBy,
    });
  }
  // metodo para ordenar a lista
  obtemOrdenacaoLista = (b, a, orderBy) => {
    const orderDirection = this.state.orderDirection;
    switch (orderBy) {
      case ORDER_KEY.AWARDS:
        return (b[ORDER_KEY.AWARDS] - a[ORDER_KEY.AWARDS]) * orderDirection;
      case ORDER_KEY.NAME:
        return (
          (a[ORDER_KEY.NAME] > b[ORDER_KEY.NAME] ? 1 : -1) * orderDirection
        );
      default:
        return ORDER_KEY.DEFAULT;
    }
  };

  // mudança de ordenação default ou reversa
  mudaOrdenacao = orderBy => {
    const orderDirection =
      this.state.orderBy === orderBy
        ? this.state.orderDirection * ORDER_DIRECTION.REVERSE
        : ORDER_DIRECTION.DEFAULT;
    this.setState({ orderBy, orderDirection });
  };

  render() {
    const { orderBy, orderDirection } = this.state;

    const { titulo, filmes, atualizarFilme } = this.props;

    const listaFilmes = filmes.slice().sort((a, b) => {
      return this.obtemOrdenacaoLista(b, a, orderBy);
    });

    return (
      <div>
        <div className="movie-list">
          <h3>
            <span>{titulo}</span>
            <button
              className="sort-button"
              onClick={() => this.mudaOrdenacao(ORDER_KEY.AWARDS)}
            >
              <i
                className={
                  orderBy === ORDER_KEY.AWARDS
                    ? orderDirection === ORDER_DIRECTION.DEFAULT
                      ? 'fa fa-sort-amount-asc'
                      : 'fa fa-sort-amount-desc'
                    : 'fa fa-sort-amount-desc'
                }
              ></i>
            </button>
            <button
              className="sort-button"
              onClick={() => this.mudaOrdenacao(ORDER_KEY.NAME)}
            >
              <i
                className={
                  orderBy === ORDER_KEY.NAME
                    ? orderDirection === ORDER_DIRECTION.DEFAULT
                      ? 'fa fa-sort-alpha-desc'
                      : 'fa fa-sort-alpha-asc'
                    : 'fa fa-sort-alpha-asc'
                }
              ></i>
            </button>
          </h3>
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
  }
}

export default ListaDeFilmes;
