import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './mail-filter-box.module.scss';

class MailFilterBox extends Component {
    
    render() {
        
        const { box } = this.props;
        const icon = `glyphicon glyphicon-${ box.iconType }`;
        const mailLink = `/mails/${ box.mailType }`;
        
        return (
            <Link to={ mailLink }>
                <button className="btn btn-primary btn-block" styleName="mail-box-btn">
                    <span className={ icon }></span>
                    <span styleName="mail-box-text">{ box.title }</span>
                </button>
            </Link>
        );
    }
}

export default CSSModules(MailFilterBox, styles);