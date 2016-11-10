import { LOAD_USERS } from '../constants';

export function loadUsers() {
    return (dispatch, getState) => {
        if(!getState().users.data.length) {
            dispatch({
                type: LOAD_USERS,
                url: 'http://www.json-generator.com/api/json/get/bQzpeuaeiG?indent=2'
            });
        }
    }
}