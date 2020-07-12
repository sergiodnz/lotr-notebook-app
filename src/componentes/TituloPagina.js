import React from 'react';

const TituloPagina = props => {
  const { titulo } = props;
  return (
    <div className="page-title">
      <h1>The Lord of The Rings</h1>
      <h2>notebook app / {titulo}</h2>
    </div>
  );
};

export default TituloPagina;
