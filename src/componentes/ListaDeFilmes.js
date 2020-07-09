import React, { Component } from 'react';

export const ORDER_KEY = {
  AWARDS: 'academyAwardWins',
  NAME: 'name',
  DEFAULT: '_id',
};

class ListaDeFilmes extends Component {
  state = { orderBy: [], flag: 1 };

  componentDidMount() {
    this.setState({ orderBy: this.props.ordenacao });
  }

  obtemOrdenacaoLista = (b, a, orderBy) => {
    const flag = this.state.flag;

    switch (orderBy) {
      case ORDER_KEY.AWARDS:
        return (b[ORDER_KEY.AWARDS] - a[ORDER_KEY.AWARDS]) * flag;
      case ORDER_KEY.NAME:
        return (a[ORDER_KEY.NAME] > b[ORDER_KEY.NAME] ? 1 : -1) * flag;
      default:
        return ORDER_KEY.DEFAULT;
    }
  };

  mudaOrdenacao = orderBy => {
    //mudança de ordenação crescente/decrescente
    const flag = this.state.orderBy === orderBy ? this.state.flag * -1 : 1;
    this.setState({ orderBy, flag });
  };

  render() {
    const { orderBy, flag } = this.state;

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
                    ? flag === 1
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
                    ? flag === 1
                      ? 'fa fa-sort-alpha-desc'
                      : 'fa fa-sort-alpha-asc'
                    : 'fa fa-sort-alpha-asc'
                }
              ></i>
            </button>
          </h3>
          <ul>
            {listaFilmes.map(movie => {
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
