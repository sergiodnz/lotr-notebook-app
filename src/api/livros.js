import server from '../config/server';

export const obterLivros = () => {
  return server.get('books').then(res => res.data);
};

export const obterLivro = id => {
  return server.get(`books/${id}`).then(res => res.data);
};

export const adicionarRevisao = revisao => {
  return server.post(`books/${revisao.bookId}/reviews`, revisao).then(res => {
    return res.data;
  });
};

export const apagarRevisao = revisao => {
  return server
    .delete(`books/${revisao.bookId}/reviews/${revisao._id}`)
    .then(res => res.data);
};

export const atualizarRevisao = revisao => {
  return server
    .put(`books/${revisao.bookId}/reviews/${revisao._id}`, revisao)
    .then(res => res.data);
};
