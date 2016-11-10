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
            users.loading = true;
            break;

        case LOAD_USERS + SUCCESS:
            users.data = response;
            users.loading = false;
            break;
        
        case LOAD_USER_BY_ID:
            const { userId } = payload;
            users.currentUser = users.data.filter(user => user.id == userId)[0];
            break;
    }

    return users;
}