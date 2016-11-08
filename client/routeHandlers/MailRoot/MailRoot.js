import React from 'react';
import MailFilter from '../../components/MailFilter/MailFilter';

const MailRoot = (props) => {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-3 col-md-2"><MailFilter /></div>
            <div className="col-xs-12 col-sm-9 col-md-10">{props.children}</div>
        </div>
    );
};

export default MailRoot;