import { LOAD_MAILS } from '../constants';

export function loadMails() {
    return {
        type: LOAD_MAILS,
        url: 'http://www.json-generator.com/api/json/get/cfnrnjDxMy?indent=2'
    }
}