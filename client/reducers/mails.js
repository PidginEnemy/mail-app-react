const defaultMails = {
    mails: [],
    loading: false
}
export default(mails = defaultMails, action) => {
    console.log(action);
    return mails;
}