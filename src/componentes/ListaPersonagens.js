import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { carregarPagina } from '../action/personagens';
// import * as ApiPersonagens from '../api/personagens';
import Paginacao from './Paginacao';
import { Link } from 'react-router-dom';

const ListaPersonagens = () => {
  const dispatch = useDispatch();

  const pagina = useSelector(store => store.pagina);

  const personagens = pagina && pagina.data ? pagina.data : [];
  const total = pagina && pagina.total ? pagina.total : 0;

  //formulario
  const numero = pagina && pagina.page ? pagina.page : 0;
  const limite = pagina && pagina.limit ? pagina.limit : 10;

  const [carregando, setCarregando] = useState(false);

  const recarregaPagina = (numero, limite) => {
    dispatch(carregarPagina({ page: numero, limit: limite }));
  };

  const alteraLimite = value => {
    setCarregando(true);
    const limiteNovo = parseInt(value);
    if (limiteNovo !== limite && limiteNovo <= total) {
      recarregaPagina(0, limiteNovo);
    }
  };

  const alteraPagina = novaPagina => {
    if (!carregando) {
      const maxPage = Math.ceil(total / limite);
      if (novaPagina >= 0 && novaPagina < maxPage) {
        recarregaPagina(novaPagina, limite);
      }
    }
  };

  return (
    <div className="movie-list">
      <h3>
        <span>Personagens</span>
      </h3>
      <Paginacao
        total={total}
        numero={numero}
        limite={limite}
        carregando={carregando}
        alteraPagina={alteraPagina}
        alteraLimite={alteraLimite}
        exibeResumo={false}
      />
      <div>
        <ul>
          {personagens &&
            personagens.map(personagem => (
              <li key={personagem._id}>
                <Link to={`personagens/${personagem._id}`}>
                  {personagem.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <Paginacao
        total={total}
        numero={numero}
        limite={limite}
        carregando={carregando}
        alteraPagina={alteraPagina}
        alteraLimite={alteraLimite}
      />
    </div>
  );
};

export default ListaPersonagens;
