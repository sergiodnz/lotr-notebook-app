import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// cria enum para as chaves de ordenação disponíveis
export const CHAVE_ORDENACAO = {
  NOME: 'name',
  PADRAO: '_id',
  //  PREMIOS: 'awards',
};
// cria enum para multiplicador usado para mudar a direcao da ordenacao
export const SENTIDO_ORDENACAO = {
  PADRAO: 1,
  INVERSO: -1,
};

const ListaDeLivros = ({ titulo, ordenacaoInicial, filterBy }) => {
  //class ListaDeLivros extends Component {
  // cria a lista com valores padrao para ordenacao
  // const todosOsLivros = useSelector(store => store.payload);
  const livros = useSelector(store => store.livros.filter(filterBy));

  const [ordenacao, setOrdenacao] = useState(CHAVE_ORDENACAO.PADRAO);
  const [sentido, setSentido] = useState(SENTIDO_ORDENACAO.PADRAO);

  // Seta a ordenação oriunda do parametro do componente
  useEffect(() => {
    setOrdenacao(ordenacaoInicial);
  }, [ordenacaoInicial]);

  // metodo para ordenar a lista
  const obtemOrdenacaoLista = (b, a, ordenacao, sentido) => {
    return (a[ordenacao] > b[ordenacao] ? 1 : -1) * sentido;
  };

  // mudança de ordenação PADRAO ou reversa
  const mudaOrdenacao = novaOrdenacao => {
    const direction =
      ordenacao === novaOrdenacao
        ? sentido * SENTIDO_ORDENACAO.INVERSO
        : SENTIDO_ORDENACAO.PADRAO;
    setOrdenacao(novaOrdenacao);
    setSentido(direction);
  };

  const listaLivros = livros.slice().sort((a, b) => {
    return obtemOrdenacaoLista(b, a, ordenacao, sentido);
  });

  const btnNameAscDesc = !(
    ordenacao === CHAVE_ORDENACAO.NOME && sentido === SENTIDO_ORDENACAO.PADRAO
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
          onClick={() => mudaOrdenacao(CHAVE_ORDENACAO.NOME)}
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
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListaDeLivros;
