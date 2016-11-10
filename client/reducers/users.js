import { START, SUCCESS, LOAD_USERS } from '../constants';

const defaultUsers = {
    data: [],
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

    }

    return users;
}