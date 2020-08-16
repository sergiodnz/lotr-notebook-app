import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageContent from '../componentes/PageContent';
import { useSelector, useDispatch } from 'react-redux';
import {
  adicionarRevisao,
  atualizarRevisao,
  apagarRevisao,
} from '../action/livros';

const DetalheLivro = () => {
  const { id } = useParams();

  const { livro, revisoes } = useSelector(state => {
    const livro = state.livros.find(livro => livro._id === id);
    return { livro, revisoes: livro ? livro.reviews : [] };
  });

  const dispatch = useDispatch();

  //controle do formulário
  const [idRevisao, setIdRevisao] = useState(0);
  const [autor, setAutor] = useState('');
  const [texto, setTexto] = useState('');
  const [estrelas, setEstrelas] = useState(0);
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const alternarFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  const alterarTexto = event => {
    setTexto(event.target.value);
  };

  const alterarEstrelas = event => {
    const valor = parseInt(event.target.value);
    if (valor >= 0 && valor <= 5) {
      setEstrelas(valor);
    }
  };

  const alterarAutor = event => {
    setAutor(event.target.value);
  };

  const editar = review => {
    setIdRevisao(review._id);
    setAutor(review.author);
    setEstrelas(review.stars);
    setTexto(review.text);
    setExibirFormulario(true);
  };

  const apagar = _id => {
    dispatch(apagarRevisao({ _id, bookId: livro._id }));
  };

  const atualizaRevisoesPagina = revisaoAtualizado => {
    setIdRevisao(0);
    setAutor('');
    setEstrelas(0);
    setTexto('');
    setExibirFormulario(false);
  };

  const enviar = event => {
    const revisao = {
      _id: idRevisao,
      author: autor,
      text: texto,
      stars: estrelas,
      bookId: livro._id,
    };
    event.preventDefault();
    if (idRevisao) {
      dispatch(atualizarRevisao(revisao));
    } else {
      dispatch(adicionarRevisao(revisao));
    }
    atualizaRevisoesPagina(revisao);
  };

  return (
    <PageContent name="Livros">
      <div className="movie-list-item">
        <div>
          <span>
            Título: <strong>{livro && livro.name}</strong>
          </span>
        </div>
        <div>
          <span>
            Revisões: <strong>{revisoes ? revisoes.length : 0}</strong>
          </span>
        </div>
        <div>
          <span>
            <button onClick={alternarFormulario}>
              {exibirFormulario ? 'Cancelar' : 'Adicionar'}
            </button>
          </span>
        </div>
        {exibirFormulario && (
          <div>
            <hr />
            <form onSubmit={enviar}>
              <div>
                <span>Nome:</span>
                <input
                  type="text"
                  name="author"
                  value={autor}
                  onChange={alterarAutor}
                />
              </div>
              <div>
                <span>Estrelas:</span>
                <input
                  type="number"
                  name="stars"
                  value={estrelas}
                  onChange={alterarEstrelas}
                />
              </div>
              <div>
                <span>Revisão:</span>
                <textarea
                  rows={10}
                  name="text"
                  value={texto}
                  onChange={alterarTexto}
                />
              </div>
              <div>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        )}
        <div>
          {revisoes &&
            revisoes.map(revisao => (
              <div key={revisao._id}>
                <hr />
                <div>
                  <i className="fa fa-star"></i>
                  <span>&nbsp;{revisao.stars}</span>
                </div>
                <div>
                  <span>
                    <strong>Autor: </strong>
                    {revisao.author}
                  </span>
                </div>
                <div>
                  <span>
                    <strong>Revisao: </strong> {revisao.text}
                  </span>
                </div>
                <div>
                  <button onClick={() => editar(revisao)}>
                    <i className="fa fa-edit"></i>
                  </button>
                  <button onClick={() => apagar(revisao._id)}>
                    <i className="fa fa-eraser"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
        <hr />
      </div>
    </PageContent>
  );
  // }
};

// export default withRouter(DetalheLivro);
export default DetalheLivro;
