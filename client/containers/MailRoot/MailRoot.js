import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMails } from '../../AC/mails';
import MailFilter from '../../components/MailFilter/MailFilter';
import Loader from '../../components/Loader/Loader';

class MailRoot extends Component {

    componentDidMount() {
        const { loading, loadMails } = this.props;
        if(!loading)
            loadMails();
    }
    
    render() {

        const { loading } = this.props;
        if(loading) return <Loader/>;
        
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-3 col-md-2"><MailFilter /></div>
                <div className="col-xs-12 col-sm-9 col-md-10">{this.props.children}</div>
            </div>
        );
    }
}

export default connect(state => {
    const { loading } = state.mails;
    return {
        loading
    };
},
{ loadMails }, 
null, 
{ pure: false })(MailRoot);