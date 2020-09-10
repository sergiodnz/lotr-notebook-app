import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RateReviewIcon from '@material-ui/icons/RateReview';
import SendIcon from '@material-ui/icons/Send';
import Rating from '@material-ui/lab/Rating';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../api/livros';
import PageContent from '../Comum/PageContent';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  review: {
    marginTop: theme.spacing(2),
  },
}));

const mediaRevisoes = revisoes => {
  if (revisoes) {
    const soma = revisoes.reduce((acc, item) => {
      acc += item.stars;
      return acc;
    }, 0);
    return soma / revisoes.length;
  } else {
    return 0;
  }
};

const DetalheLivro = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [livro, setLivro] = useState({
    _id: '',
    name: '',
    reviewCount: 0,
    reviews: [],
  });
  const [revisoes, setRevisoes] = useState([]);

  useEffect(() => {
    api.obterLivro(id).then(livro => {
      setLivro(livro);
      setRevisoes(livro.reviews);
    });
  }, [id]);

  //controle do formulário
  const [idRevisao, setIdRevisao] = useState(0);
  const [autor, setAutor] = useState('');
  const [texto, setTexto] = useState('');
  const [estrelas, setEstrelas] = useState(0);
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const alternarFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  const alterarTexto = event => {
    setTexto(event.target.value);
  };

  const alterarAutor = event => {
    setAutor(event.target.value);
  };

  const editar = review => {
    setIdRevisao(review._id);
    setAutor(review.author);
    setEstrelas(review.stars);
    setTexto(review.text);
    setExibirFormulario(true);
  };

  const apagar = idRevisaoApagar => {
    api.apagarRevisao(livro._id, idRevisaoApagar).then(retorno => {
      setRevisoes(livro.reviews.filter(review => review._id !== retorno));
    });
  };

  const atualizaRevisoesPagina = revisaoAtualizado => {
    setIdRevisao(0);
    setAutor('');
    setEstrelas(0);
    setTexto('');
    setExibirFormulario(false);
  };

  const enviar = event => {
    const revisao = {
      _id: idRevisao,
      author: autor,
      text: texto,
      stars: estrelas,
      bookId: livro._id,
    };
    event.preventDefault();
    if (idRevisao) {
      api.atualizarRevisao(revisao).then(revisao => {
        setRevisoes(
          [revisao].concat(revisoes.filter(data => data._id !== revisao._id))
        );
        atualizaRevisoesPagina(revisao);
      });
    } else {
      api.adicionarRevisao(revisao).then(revisao => {
        setRevisoes([revisao].concat(revisoes));
        atualizaRevisoesPagina(revisao);
      });
    }
  };

  return (
    <PageContent name="Detalhe Livro">
      <Card className={classes.root}>
        <CardContent>
          <Rating name="read-only" value={mediaRevisoes(revisoes)} readOnly />
          <Typography variant="h5" component="h2">
            {livro.name}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {livro.reviewCount} Revisões
          </Typography>
          <CardActions>
            <IconButton
              color="primary"
              onClick={alternarFormulario}
              title="Escreve aqui mininu!!"
            >
              <RateReviewIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>

      {exibirFormulario && (
        <Card className={classes.root}>
          <form onSubmit={enviar}>
            <CardContent>
              <Typography>
                <TextField
                  id="outlined-basic"
                  label="Nome: "
                  value={autor}
                  onChange={alterarAutor}
                />
              </Typography>
              <Typography>
                <Rating
                  name="simple-controlled"
                  value={estrelas}
                  onChange={(event, newValue) => {
                    setEstrelas(newValue);
                  }}
                />
              </Typography>
              <Typography>
                <TextareaAutosize
                  aria-label="Revisão"
                  rows={10}
                  placeholder="Revisão"
                  value={texto}
                  onChange={alterarTexto}
                />
              </Typography>
              <CardActions>
                <IconButton color="primary" type="submit" title="Sapeca!">
                  <SendIcon />
                </IconButton>
              </CardActions>
            </CardContent>
          </form>
        </Card>
      )}
      <div>
        {revisoes &&
          revisoes.map(revisao => (
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              className={classes.review}
              key={revisao._id}
            >
              <Rating name="read-only" value={revisao.stars} readOnly />

              <Typography>
                <strong>Autor: </strong>
                {revisao.author}
              </Typography>

              <Typography>
                <strong>Revisao: </strong> {revisao.text}
              </Typography>
              <IconButton
                color="primary"
                onClick={() => editar(revisao)}
                title="Ajeitar!"
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="primary"
                onClick={() => apagar(revisao._id)}
                title="Desovar essa Bagaça!"
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
      </div>
    </PageContent>
  );
};

export default DetalheLivro;
