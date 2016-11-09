import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import moment from 'moment';
import CSSModules from 'react-css-modules';
import styles from './mail-list.module.scss';

class MailList extends Component {

    handleMailRowClick = (mailId) => {
        const { currentMailType } = this.props;
        history.push(`/mails/${currentMailType}/${mailId}`);
    }

    render() {

        const { data } = this.props;

        const mailItems = data.map((mail) => {
            const mailAttachment = (mail.withAttachments) ? <span className="glyphicon glyphicon-paperclip"></span> : null;
            const mailDate = moment(mail.dtReceived).format('DD.MM.YYYY');
            return (
                <tr styleName="mail-list-row" key={mail._id} onClick={ () => this.handleMailRowClick(mail._id) }>
                    <td><img src={mail.picture} className="img-circle"/></td>
                    <td>{mail.name}</td>
                    <td>{mail.subject}</td>
                    <td>{mailAttachment}</td>
                    <td>{mailDate}</td>
                </tr>
            );
        });
        
        return (
            <div styleName="mail-list">
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
    const { data } = state.mails;
    const { currentMailType } = props;
    const mailsInBox = data.filter((item) => {
        return item.mailBoxType == currentMailType;
    });
    return {
        data: mailsInBox
    };
},
null,
null,
{ pure: false })
(CSSModules(MailList,styles));