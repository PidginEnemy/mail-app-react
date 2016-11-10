import { START, SUCCESS, LOAD_MAILS, LOAD_MAIL_BY_ID } from '../constants';

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
    currentMail: null,
    loading: false
}
export default (mails = defaultMails, action) => {

    const { type, payload, response } = action;

    switch (type) {

        case LOAD_MAILS + START:
            mails.loading = true;
            break;
        
        case LOAD_MAILS + SUCCESS:
            mails.loading = false;
            mails.data = response;
            break;
     
        case LOAD_MAIL_BY_ID:
            mails.currentMail = mails.data.filter(mail => mail._id == payload.mailId)[0];
            break;
    }

    return mails;
}