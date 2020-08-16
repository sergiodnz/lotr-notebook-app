import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import livros from '../reducer/livros';
import movies from '../reducer/movies';
import pagina from '../reducer/personagens';

const reducers = combineReducers({ livros, movies, pagina });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
