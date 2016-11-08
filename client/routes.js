import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';
import history from './history';
import App from './components/App/App';
import MailRoot from './routeHandlers/MailRoot/MailRoot';
import MailsListPage from './routeHandlers/MailsListPage/MailsListPage';
import MailPage from './routeHandlers/MailPage/MailPage';
import UsersPage from './routeHandlers/UsersPage/UsersPage';
import NotFoundPage from './routeHandlers/NotFoundPage/NotFoundPage';

export default <Router history={history}>
    <Route path="/" component={App}>
        <IndexRedirect to="/mails/inbox"/>
        <Route path="mails" component={MailRoot}>
            <IndexRedirect to="/mails/inbox"/>
            <Route path=":mailBox" component={MailsListPage}/>
            <Route path=":mailBox/:mailId" component={MailPage}/>
        </Route>
        <Route path="users" component={UsersPage}/>
    </Route>
    <Route path="*" component={NotFoundPage}/>
</Router>