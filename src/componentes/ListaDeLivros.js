import React, { Component } from 'react';

// cria enum para as chaves de ordenação disponíveis
export const ORDER_KEY = {
  NAME: 'name',
  DEFAULT: '_id',
};
// cria enum para multiplicador usado para mudar a direcao da ordenacao
export const ORDER_DIRECTION = {
  DEFAULT: 1,
  REVERSE: -1,
};

class ListaDeLivros extends Component {
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
    return (a[orderBy] > b[orderBy] ? 1 : -1) * orderDirection;
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

    const { titulo, livros } = this.props;

    const listaLivros = livros.slice().sort((a, b) => {
      return this.obtemOrdenacaoLista(b, a, orderBy);
    });

    const btnAmountAscDesc =
      orderBy === ORDER_KEY.DEFAULT &&
      orderDirection === ORDER_DIRECTION.DEFAULT
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
          <h3>
            <span>{titulo}</span>
            <button
              className="sort-button"
              onClick={() => this.mudaOrdenacao(ORDER_KEY.AWARDS)}
            >
              <i className={'fa fa-sort-amount-' + btnAmountAscDesc}></i>
            </button>
            <button
              className="sort-button"
              onClick={() => this.mudaOrdenacao(ORDER_KEY.NAME)}
            >
              <i className={'fa fa-sort-alpha-' + btnNameAscDesc}></i>
            </button>
          </h3>
          <ul>
            {listaLivros.map(livro => {
              return (
                <li className="movie-list-item" key={livro._id}>
                  <div>{livro.name}</div>
                  <div>Reviews: {livro.reviews.length}</div>

                  <span>
                    <button>
                      <i className="fa fa-check"></i>
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListaDeLivros;
