import { LOAD_MAILS, LOAD_MAIL_BY_ID } from '../constants';

export function loadMails() {
    return (dispatch, getState) => {
        if(!getState().mails.data.length) { // if store doesn't have mails
            dispatch({
                type: LOAD_MAILS,
                url: 'http://www.json-generator.com/api/json/get/cfnrnjDxMy?indent=2'
            });
        }
    };
}

export function loadMailById(mailId) {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_MAIL_BY_ID,
            payload: {
                mailId
            }
        });
    };
}