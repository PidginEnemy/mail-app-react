import React from 'react';
import MailList from '../../components/MailList/MailList';
import MailFilter from '../../components/MailFilter/MailFilter';

const MailsListPage = (props) => {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-3 col-md-2"><MailFilter /></div>
            <div className="col-xs-12 col-sm-9 col-md-10"><MailList currentMailType={props.params.mailBox} /></div>
        </div>
    );
};

export default MailsListPage;