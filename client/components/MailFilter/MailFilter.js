import React, {Component} from 'react';
import MailFilterBox from '../MailFilterBox/MailFilterBox';

class MailFilter extends Component {

    render() {

        const mailTypes = [{
            id: 1,
            title: 'Inbox',
            iconType: 'download'
        }, {
            id: 2,
            title: 'Outbox',
            iconType: 'upload'
        }, {
            id: 3,
            title: 'Spam',
            iconType: 'ban-circle'
        }, {
            id: 4,
            title: 'Trash',
            iconType: 'trash'
        }];

        const mailBoxes = mailTypes.map(mType => (
            <MailFilterBox box={mType} key={mType.id}/>
        ));

        return (
            <div>
                {mailBoxes}
            </div>
        );
    }
}

export default MailFilter;