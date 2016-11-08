import React from 'react';
import MailList from '../../components/MailList/MailList';

const MailsListPage = (props) => {
    return (
        <div>
            <MailList currentMailType={props.params.mailBox} />
        </div>
    );
};

export default MailsListPage;