import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

const ListaDeLivros = ({ titulo, livros, order }) => {
  //class ListaDeLivros extends Component {
  // cria a lista com valores default para ordenacao

  const [orderBy, setOrderBy] = useState(ORDER_KEY.DEFAULT);
  const [orderDirection, setOrderDirection] = useState(ORDER_DIRECTION.DEFAULT);

  // Seta a ordenação oriunda do parametro do componente
  useEffect(() => {
    setOrderBy(order);
  }, [order]);

  // metodo para ordenar a lista
  const obtemOrdenacaoLista = (b, a, order, direction) => {
    return (a[order] > b[order] ? 1 : -1) * direction;
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

  const listaLivros = livros.slice().sort((a, b) => {
    return obtemOrdenacaoLista(b, a, orderBy, orderDirection);
  });

  const btnAmountAscDesc =
    orderBy === ORDER_KEY.DEFAULT && orderDirection === ORDER_DIRECTION.DEFAULT
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
        </h3>
        <button
          className="sort-button"
          onClick={() => mudaOrdenacao(ORDER_KEY.AWARDS)}
        >
          <i className={'fa fa-sort-amount-' + btnAmountAscDesc}></i>
        </button>
        <button
          className="sort-button"
          onClick={() => mudaOrdenacao(ORDER_KEY.NAME)}
        >
          <i className={'fa fa-sort-alpha-' + btnNameAscDesc}></i>
        </button>

        <ul>
          {listaLivros.map(livro => {
            return (
              <li className="movie-list-item" key={livro._id}>
                <div>
                  <Link to={`livros/${livro._id}`}>{livro.name}</Link>
                </div>
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
};

export default ListaDeLivros;
