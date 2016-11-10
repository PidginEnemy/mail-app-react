import { combineReducers } from 'redux';
import mails from './mails';
import users from './users';
export default combineReducers({
    mails, users
});