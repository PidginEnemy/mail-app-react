import React from 'react';
import MailList from '../../components/MailList/MailList';
import MailFilter from '../../components/MailFilter/MailFilter';

const MailsPage = (props) => {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-3 col-md-2"><MailFilter /></div>
            <div className="col-xs-12 col-sm-9 col-md-10"><MailList /></div>
        </div>
    );
};

export default MailsPage;