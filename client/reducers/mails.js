import { START, SUCCESS } from '../constants/common';
import { LOAD_MAILS, LOAD_MAIL_BY_ID } from '../constants/mail';

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

  const {type, payload, response} = action;

  switch (type) {

    case LOAD_MAILS + START:
      return {
        ...mails,
        loading: true
      };
      break;

    case LOAD_MAILS + SUCCESS:
      return {
        ...mails,
        loading: false,
        data: response
      };
      break;

    case LOAD_MAIL_BY_ID:
      return {
        ...mails,
        currentMail: mails.data.filter(mail => mail._id == payload.mailId)[0]
      };
      break;
  }

  return mails;
}