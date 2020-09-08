import React from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
}));

const PageContent = ({ name, children }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h5">notebook app / {name}</Typography>
        <Typography variant="h6">pathname: ( {pathname} )</Typography>
        <hr />
      </div>
      {children}
    </div>
  );
};

export default PageContent;
