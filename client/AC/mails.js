import { LOAD_MAILS } from '../constants';

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