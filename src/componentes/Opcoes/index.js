import React from 'react';
import Botao from '../Comum/Botao';

const Opcoes = () => {
  return (
    <>
      <Botao vai="/">Home</Botao>
      <Botao vai="/filmes">Filmes</Botao>
      <Botao vai="/livros">Livros</Botao>
      <Botao vai="/personagens">Personagens</Botao>
    </>
  );
};

export default Opcoes;
