import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { loadMails, setMailType } from '../../AC/mails';
import Loader from '../Loader/Loader';

class MailList extends Component {
    
    componentDidMount() {
        const { loading, mailBox, currentMailType, loadMails, setMailType } = this.props;
        if(currentMailType != mailBox)
            setMailType(currentMailType);
        if(!loading)
            loadMails();
    }

    render() {
        
        const { loading, data } = this.props;
        if(loading) return <Loader/>;

        const mailItems = data.map((mail) => {
            const mailAttachment = (mail.withAttachments) ? <span className="glyphicon glyphicon-paperclip"></span> : null;
            const mailDate = moment(mail.dtReceived).format('DD.MM.YYYY');
            return (
                <tr key={mail._id}>
                    <td><img src={mail.picture} className="img-circle"/></td>
                    <td>{mail.name}</td>
                    <td>{mail.subject}</td>
                    <td>{mailAttachment}</td>
                    <td>{mailDate}</td>
                </tr>
            );
        });
        
        return (
            <div>
                <table className="table table-condensed table-hover">
                    <tbody>
                        {mailItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect((state,props) => {
        const { loading, data, mailBox } = state.mails;
        const mailsInBox = data.filter((item) => {
            return item.mailBoxType == mailBox;
        });
        return {
            loading,
            mailBox,
            data: mailsInBox
        };
    },
    { loadMails, setMailType },
    null,
    { pure: false })
(MailList);