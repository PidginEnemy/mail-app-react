import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './mail-filter-box.module.scss';

const MailFilterBox = (props) => {
    const {box} = props;
    const icon = `glyphicon glyphicon-${box.iconType}`;
    return (
        <button className="btn btn-primary btn-block">
            <span className={icon}></span>
            <span styleName="mail-box-text">{box.title}</span>
        </button>
    );
};

export default CSSModules(MailFilterBox, styles);