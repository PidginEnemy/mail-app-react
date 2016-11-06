import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import ajax from '../middlewares/ajax';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(ajax));

const store = createStore(reducers, {}, enhancer);

window.store = store;
export default store;