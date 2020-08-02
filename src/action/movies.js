export const FILMES = {
  CARREGAR: 'CARREGAR_FILMES',
  ATUALIZAR: 'ATUALIZAR_FILME',
};

export const loadMovies = movies => {
  return { type: FILMES.CARREGAR, movies };
};

export const atualizarFilme = movie => {
  return { type: FILMES.ATUALIZAR, movie };
};
