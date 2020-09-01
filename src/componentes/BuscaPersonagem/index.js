import Paper from '@material-ui/core/Paper';
// import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { Debounce } from 'react-throttle';
import { procurarPersonagem } from '../../api/personagem';
import PageContent from '../Comum/PageContent';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
  },
}));

const Personagens = () => {
  const classes = useStyles();
  const [personagens, setPersonagens] = useState([]);

  const procuraNomePersonagem = e => {
    const nome = e.target.value;
    if (nome) {
      procurarPersonagem(nome).then(data => {
        setPersonagens(data);
      });
    } else {
      setPersonagens([]);
    }
  };

  console.log(personagens);

  return (
    <PageContent name="Personagens">
      <div className={classes.root}>
        <Debounce time="400" handler="onChange">
          <TextField
            id="outlined-basic"
            label="Nome do personagem"
            onChange={e => procuraNomePersonagem(e)}
          />
        </Debounce>
      </div>
      <div>
        {personagens && (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    {personagens.length} personagen(s) encontrado(s)
                  </TableCell>
                  <TableCell>Raça</TableCell>
                  <TableCell>Reino</TableCell>
                  <TableCell>Gênero</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {personagens &&
                  personagens.map(personagem => (
                    <TableRow key={personagem._id}>
                      <TableCell component="th" scope="row">
                        {personagem.Name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {personagem.Race}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {personagem.realm}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {personagem.gender}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Button
                          component="a"
                          target={personagem._id}
                          href={personagem.Url}
                        >
                          Wiki
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </PageContent>
  );
};

export default Personagens;
