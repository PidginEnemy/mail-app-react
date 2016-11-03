import React from 'react';
import {Router, Route} from 'react-router';
import history from './history';
import App from './components/App';
import NotFound from './routeHandlers/NotFound';

export default <Router history={history}>
    <Route path="/" component={App}>
    </Route>
    <Route path="*" component={NotFound}/>
</Router>