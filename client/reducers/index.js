import { combineReducers } from 'redux';
import mails from './mails';
import users from './users';
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
    mails, 
    users, 
    form: formReducer
});