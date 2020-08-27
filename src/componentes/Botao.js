import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Botao = ({ cor = 'primary', vai, children }) => {
  return (
    <Button
      color={cor}
      variant="contained"
      component={Link}
      to={vai}
      disableElevation
    >
      {children}
    </Button>
  );
};

export default Botao;
