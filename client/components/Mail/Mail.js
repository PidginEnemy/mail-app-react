import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { loadMailById } from '../../AC/mails';

class Mail extends Component {

    componentDidMount() {
        const { mailId, loadMailById } = this.props;
        loadMailById(mailId);
    }
    
    render() {
        
        const { mail } = this.props;
        if(!mail) return null;

        const mailDate = moment(mail.dtReceived).format('DD.MM.YYYY');
        const mailAttachmentUrl = `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&guid=${mail.guid}`;
        const mailAttachment = (mail.withAttachments) ? <div><strong>Attachment:</strong><br/><img src={mailAttachmentUrl}/></div> : null;

        return (
            <div>
                <div className="col-xs-12">
                    <div className="pull-left">
                        <img className="img-circle" src={mail.picture}/>
                        <strong>{mail.name}</strong>
                        <p>{mail.email}</p>
                        <p>{mailDate}</p>
                    </div>
                </div>
                <div className="col-xs-12">
                    <p>{mail.text}</p>
                    {mailAttachment}
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        mail: state.mails.currentMail
    };
},
{ loadMailById },
null,
{ pure: false })(Mail);