import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Opcoes from '../Opcoes';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2,
    marginBottom: theme.spacing(10),
  },
  titulo: {
    flexGrow: 1,
  },
}));

const Cabeca = ({ name, children }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="absolute">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.titulo}>
              {name}
            </Typography>
            <Opcoes />
          </Toolbar>
        </AppBar>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Cabeca;