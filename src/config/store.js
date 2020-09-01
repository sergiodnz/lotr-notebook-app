import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import pagina from '../componentes/ListaPersonagem/reducer';
import livros from '../componentes/ListaDeLivros/reducer';

const reducers = combineReducers({ pagina, livros });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
