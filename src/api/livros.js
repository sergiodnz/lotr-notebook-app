import server from '../config/server';

export const obterLivros = () => {
  return server.get('books').then(res => res.data);
};

export const obterLivro = id => {
  return server.get(`books/${id}`).then(res => res.data);
};

export const adicionarRevisao = (idLivro, revisao) => {
  return server.post(`books/${idLivro}/reviews`, revisao).then(res => {
    console.log(res.data);
    return res.data;
  });
};

export const apagarRevisao = (idLivro, idRevisao) => {
  return server
    .delete(`books/${idLivro}/reviews/${idRevisao}`)
    .then(res => res.data);
};

export const atualizarRevisao = (idLivro, revisao) => {
  return server
    .put(`books/${idLivro}/reviews/${revisao._id}`, revisao)
    .then(res => res.data);
};
