import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons/Menu';

const TituloPagina = props => {
  const { titulo } = props;
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          The Lord of The Rings [notebook app / {titulo}]
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TituloPagina;
