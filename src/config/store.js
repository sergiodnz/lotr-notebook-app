import { createStore, combineReducers } from 'redux';
import livros from '../reducer/livros';
import movies from '../reducer/movies';
import pagina from '../reducer/personagens';

const reducers = combineReducers({ livros, movies, pagina });

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
