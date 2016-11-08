import React from 'react';
import Mail from '../../components/Mail/Mail';

const MailPage = (props) => {
    return (
        <div>
            <Mail mailId={props.params.mailId}/>
        </div>
    );
};

export default MailPage;