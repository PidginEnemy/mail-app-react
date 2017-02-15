import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';
import history from './history';
import App from './components/App/App';
import MailRoot from './containers/MailRoot/MailRoot';
import MailsListPage from './containers/MailsListPage/MailsListPage';
import MailPage from './containers/MailPage/MailPage';
import UsersRoot from './containers/UsersRoot/UsersRoot';
import UsersListPage from './containers/UsersListPage/UsersListPage';
import UserPage from './containers/UserPage/UserPage';
import HLSPage from './containers/HLSPage/HLSPage';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';

export default <Router history={history}>
  <Route path="/" component={App}>
    <IndexRedirect to="/mails/inbox"/>
    <Route path="mails" component={MailRoot}>
      <IndexRedirect to="/mails/inbox"/>
      <Route path=":mailBox" component={MailsListPage}/>
      <Route path=":mailBox/:mailId" component={MailPage}/>
    </Route>
    <Route path="users" component={UsersRoot}>
      <IndexRoute component={UsersListPage}/>
      <Route path=":userId" component={UserPage}/>
    </Route>
    <Route path="hls" component={HLSPage}></Route>
  </Route>
  <Route path="*" component={NotFoundPage}/>
</Router>