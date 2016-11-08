import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMailById } from '../../AC/mails';

class Mail extends Component {

    componentDidMount() {
        const { mailId, loadMailById } = this.props;
        loadMailById(mailId);
    }
    
    render() {
        
        const { mail } = this.props;
        console.log(mail);
        
        return (
            <div>
                
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