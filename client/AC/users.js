import { LOAD_USERS, LOAD_USER_BY_ID, SAVE_USER } from '../constants/user';

export function loadUsers() {
  return (dispatch, getState) => {
    if (!getState().users.data.length) {
      dispatch({
        type: LOAD_USERS,
        url: 'http://www.json-generator.com/api/json/get/bQzpeuaeiG?indent=2'
      });
    }
  };
}

export function loadUserById(userId) {
  return {
    type: LOAD_USER_BY_ID,
    payload: {
      userId
    }
  };
}

export function saveUser(user) {
  return {
    type: SAVE_USER,
    payload: {
      user
    }
  };
}