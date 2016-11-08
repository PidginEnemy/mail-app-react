import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import moment from 'moment';
import { loadMails } from '../../AC/mails';
import Loader from '../Loader/Loader';

class MailList extends Component {
    
    componentDidMount() {
        const { loading, loadMails } = this.props;
        if(!loading)
            loadMails();
    }

    handleMailRowClick = (mailId) => {
        const { currentMailType } = this.props;
        history.push(`/mails/${currentMailType}/${mailId}`);
    }

    render() {

        const { loading, data } = this.props;
        if(loading) return <Loader/>;

        const mailItems = data.map((mail) => {
            const mailAttachment = (mail.withAttachments) ? <span className="glyphicon glyphicon-paperclip"></span> : null;
            const mailDate = moment(mail.dtReceived).format('DD.MM.YYYY');
            return (
                <tr key={mail._id} onClick={ () => this.handleMailRowClick(mail._id) }>
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
    const { loading, data } = state.mails;
    const { currentMailType } = props;
    const mailsInBox = data.filter((item) => {
        return item.mailBoxType == currentMailType;
    });
    return {
        loading,
        data: mailsInBox
    };
},
{ loadMails },
null,
{ pure: false })
(MailList);