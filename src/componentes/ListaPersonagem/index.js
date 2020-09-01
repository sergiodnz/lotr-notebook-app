import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carregarPagina } from './action';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  table: {
    maxHeight: '75vh',
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const ListaPersonagem = () => {
  const dispatch = useDispatch();
  const { data, page, limit, total, loading } = useSelector(
    store => store.pagina
  );

  useEffect(() => {
    dispatch(carregarPagina({ page, limit }));
  }, [dispatch, page, limit]);

  const classes = useStyles();

  const handleChangePage = (event, novoNumero) => {
    dispatch(carregarPagina({ page: novoNumero, limit }));
  };

  const handleChangeRowsPerPage = event => {
    dispatch(carregarPagina({ page: 0, limit: event.target.value }));
  };

  return (
    <>
      <Paper>
        <TableContainer className={classes.table}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell className={classes.head}>Nome</TableCell>
                <TableCell className={classes.head}>Raça</TableCell>
                <TableCell className={classes.head}>Reino</TableCell>
              </TableRow>
            </TableHead>

            {data && (
              <TableBody>
                {data.map(row => (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row.Name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.Race}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.realm}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        {data && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            count={total ? total : 0}
            rowsPerPage={limit ? limit : 10}
            page={page ? page : 0}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}
      </Paper>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default ListaPersonagem;
