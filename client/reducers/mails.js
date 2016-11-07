import { START, SUCCESS, LOAD_MAILS } from '../constants';

const defaultMails = {
    mailBox: 'inbox',
    data: [],
    loading: false
}
export default(mails = defaultMails, action) => {

    const { type, payload, response } = action;

    switch (type) {

        case LOAD_MAILS + START:
            mails.loading = true;
            break;
        
        case LOAD_MAILS + SUCCESS:
            mails.loading = false;
            mails.data = response;
            break;
    }

    return mails;
}