import React from 'react';

const Paginacao = ({
  total,
  numero,
  limite,
  carregando,
  alteraPagina,
  alteraLimite,
  exibeComandos = true,
  exibeResumo = true,
}) => {
  return (
    <div>
      {exibeComandos ? (
        <div>
          <span>
            <button
              disabled={numero === 0 || carregando}
              onClick={() => alteraPagina(numero - 1, limite)}
              title="Página Anterior"
            >
              {'<'}
            </button>
          </span>
          <span>
            <button disabled={true} title="Página Atual">
              <strong>{numero + 1}</strong>
            </button>
          </span>
          <span>
            <button
              disabled={numero + 1 === Math.ceil(total / limite) || carregando}
              onClick={() => alteraPagina(numero + 1, limite)}
              title="Próxima Página"
            >
              {'>'}
            </button>
          </span>
          <span>
            <select
              value={limite}
              name="Limite"
              onChange={e => alteraLimite(e.target.value)}
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
          <label> Registros por página</label>
        </div>
      ) : (
        <></>
      )}
      {exibeResumo ? (
        carregando ? (
          <div>
            <span>
              <strong>Total:</strong> --
            </span>
            <span>
              <strong>Página:</strong> --
            </span>
            <span>
              <strong>Exibindo -- </strong>: -- <strong>-</strong> --{' '}
            </span>
          </div>
        ) : (
          <div>
            <span>
              <strong>Total: </strong> {total}
            </span>
            <span>
              <strong>Exibindo de </strong>
              {numero * limite + 1} <strong>a </strong>
              {numero + 1 === Math.ceil(total / limite)
                ? total
                : (numero + 1) * limite}
            </span>
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Paginacao;
