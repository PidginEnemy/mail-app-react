import { LOAD_MAILS, SET_MAIL_TYPE } from '../constants';

export function setMailType(mailType) {
    return {
        type: SET_MAIL_TYPE,
        payload: {
            mailType
        }
    }
}

export function loadMails() {
    return (dispath, getState) => {
        if(!getState().mails.data.length) { // if store doesn't have mails
            dispath({
                type: LOAD_MAILS,
                url: 'http://www.json-generator.com/api/json/get/cfnrnjDxMy?indent=2'
            });
        }
    };
}