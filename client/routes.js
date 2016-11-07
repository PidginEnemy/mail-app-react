import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';
import history from './history';
import App from './components/App/App';
import MailsPage from './routeHandlers/MailsPage/MailsPage';
import UsersPage from './routeHandlers/UsersPage/UsersPage';
import NotFoundPage from './routeHandlers/NotFoundPage/NotFoundPage';

export default <Router history={history}>
    <Route path="/" component={App}>
        <IndexRedirect to="/mails/inbox"/>
        <Route path="mails/:mailBox" component={MailsPage}/>
        <Route path="users" component={UsersPage}/>
    </Route>
    <Route path="*" component={NotFoundPage}/>
</Router>