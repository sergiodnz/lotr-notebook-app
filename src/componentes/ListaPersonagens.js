import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api/personagens';

const ListaPersonagens = () => {
  const [pagina, setPagina] = useState(0);
  const [limite, setLimite] = useState(10);
  const [total, setTotal] = useState(0);
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    getCharacters(0, limite)
      .then(data => {
        setTotal(data.total);
        setPersonagens(data.data);
        setPagina(data.page);
      })
      .finally(() => setCarregando(false));
  }, [limite]);

  const handleChangePage = futurePage => {
    if (!carregando) {
      const maxPage = Math.ceil(total / limite);
      if (futurePage >= 0 && futurePage < maxPage) {
        getCharacters(futurePage, limite).then(data => {
          setTotal(data.total);
          setPersonagens(data.data);
          setPagina(data.page);
        });
      }
    }
  };

  const handleChangeLimit = value => {
    setCarregando(true);
    const limiteNovo = parseInt(value);
    if (limiteNovo !== limite && limiteNovo <= total) {
      setLimite(limiteNovo);
    }
  };

  return (
    <div className="movie-list">
      <h3>
        <span>Personagens</span>
      </h3>
      <div>
        <ul>
          {personagens &&
            personagens.map(personagem => (
              <li key={personagem._id}>{personagem.name}</li>
            ))}
        </ul>
      </div>
      <div>
        <span>
          <button
            disabled={pagina === 0 || carregando}
            onClick={() => handleChangePage(pagina - 1)}
            title="Página Anterior"
          >
            {'<'}
          </button>
        </span>
        <span>
          <button disabled={true} title="Página Atual">
            <strong>{pagina + 1}</strong>
          </button>
        </span>
        <span>
          <button
            disabled={pagina + 1 === Math.ceil(total / limite) || carregando}
            onClick={() => handleChangePage(pagina + 1)}
            title="Próxima Página"
          >
            {'>'}
          </button>
        </span>
        <span>
          <label>Registros por Página: </label>
          <select
            value={limite}
            name="Limite"
            onChange={e => handleChangeLimit(e.target.value)}
            disabled={carregando}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={300}>300</option>
            <option value={total}>Todos</option>
          </select>
        </span>
      </div>
      {carregando ? (
        <div>
          <span>
            <strong>Total:</strong> --
          </span>
          <span>
            <strong>Página:</strong> --
          </span>
          <span>
            <strong>Exibindo:</strong>: -- <strong>to:</strong> --{' '}
          </span>
        </div>
      ) : (
        <div>
          <span>
            <strong>Total: </strong> {total}
          </span>
          <span>
            <strong>Página: </strong> {pagina + 1}
          </span>
          <span>
            <strong>Exibindo: </strong>
            {pagina * limite + 1} <strong>to </strong>
            {pagina + 1 === Math.ceil(total / limite)
              ? total
              : (pagina + 1) * limite}
          </span>
        </div>
      )}
    </div>
  );
};

export default ListaPersonagens;
