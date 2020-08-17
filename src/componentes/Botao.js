import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Botao = ({ vai, children }) => {
  return (
    <Button color="primary" variant="contained" component={Link} to={vai}>
      {children}
    </Button>
  );
};

export default Botao;
