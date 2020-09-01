import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Botao = ({ cor = 'inherit', vai, children }) => {
  return (
    <Button color={cor} component={Link} to={vai} disableElevation>
      {children}
    </Button>
  );
};

export default Botao;
