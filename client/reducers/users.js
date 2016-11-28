import { START, SUCCESS } from '../constants/common';
import { LOAD_USERS, LOAD_USER_BY_ID, SAVE_USER } from '../constants/user';

const defaultUsers = {
  data: [],
  currentUser: null,
  loading: false
};
export default (users = defaultUsers, action) => {

  const { type, payload, response } = action;

  switch (type) {

    case LOAD_USERS + START:
      return {
        ...users,
        loading: true
      };
      break;

    case LOAD_USERS + SUCCESS:
      return {
        ...users,
        data: response,
        loading: false
      };
      break;

    case LOAD_USER_BY_ID:
      const { userId } = payload;
      return {
        ...users,
        currentUser: users.data.filter(user => user.id == userId)[0]
      };
      break;

    case SAVE_USER:
      const { user } = payload;
      return { ...users,
        data: users.data.map((item) => {
          if(item.id === user.id)
            item = user;
          return item;
        }),
        currentUser: user
      };
      break;
  }

  return users;
}