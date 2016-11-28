import { START, SUCCESS, LOAD_USERS, LOAD_USER_BY_ID } from '../constants';

const defaultUsers = {
    data: [],
    currentUser: null,
    loading: false
};
export default (users = defaultUsers, action) => {

    const { type, payload, response } = action;

    switch(type) {

        case LOAD_USERS + START:
            return { ...users,
                loading: true
            };
            break;

        case LOAD_USERS + SUCCESS:
            return { ...users,
                data: response,
                loading: false
            };
            break;
        
        case LOAD_USER_BY_ID:
            const { userId } = payload;
            return { ...users,
                currentUser: users.data.filter(user => user.id == userId)[0]
            };
            break;
    }

    return users;
}