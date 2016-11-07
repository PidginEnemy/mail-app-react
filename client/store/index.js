import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import fetch from '../middlewares/fetch';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(fetch));

const store = createStore(reducers, {}, enhancer);

window.store = store;
export default store;