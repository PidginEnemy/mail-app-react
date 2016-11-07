import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMails } from '../../AC/mails';
import Loader from '../Loader/Loader';

class MailList extends Component {
    
    componentDidMount() {
        const { loading, loadMails } = this.props;
        if(!loading)
            loadMails();
    }

    render() {

        const { loading, data } = this.props.mails;
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
        return state;
    }, 
    { loadMails },
    null,
    { pure: false })
(MailList);