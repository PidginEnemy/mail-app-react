import React, { Component } from 'react';
import { connect } from 'react-redux';
import MailFilterBox from '../MailFilterBox/MailFilterBox';

class MailFilter extends Component {

    render() {
        
        const { mailTypes } = this.props;

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

export default connect(state => {
    const { mailTypes } = state.mails;
    return {
        mailTypes
    };
}, 
{},
null)
(MailFilter);