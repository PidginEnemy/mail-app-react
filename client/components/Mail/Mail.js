import React, { Component } from 'react';
import moment from 'moment';

class Mail extends Component {
    
    render() {
        
        const { mail } = this.props;

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

export default Mail;