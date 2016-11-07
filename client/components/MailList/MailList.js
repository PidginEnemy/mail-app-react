import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            return (
                <tr key={mail._id}>
                    <td></td>
                    <td>{mail.name}</td>
                    <td>{mail.subject}</td>
                    <td></td>
                    <td>{mail.dtReceived}</td>
                </tr>
            );
        });
        
        return (
            <div>
                <table className="table table-hover">
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