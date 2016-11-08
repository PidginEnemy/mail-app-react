import { START, SUCCESS, LOAD_MAILS } from '../constants';

const defaultMails = {
    data: [],
    mailTypes: [{
        id: 1,
        title: 'Inbox',
        iconType: 'download',
        mailType: 'inbox'
    }, {
        id: 2,
        title: 'Outbox',
        iconType: 'upload',
        mailType: 'outbox'
    }, {
        id: 3,
        title: 'Spam',
        iconType: 'ban-circle',
        mailType: 'spam'
    }, {
        id: 4,
        title: 'Trash',
        iconType: 'trash',
        mailType: 'trash'
    }],
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