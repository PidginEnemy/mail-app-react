import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMailType } from '../../AC/mails';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './mail-filter-box.module.scss';

class MailFilterBox extends Component {

    handleSetMailType = () => {
        const { setMailType, box } = this.props;
        setMailType(box.mailType);
    }
    
    render() {
        
        const { box } = this.props;
        const icon = `glyphicon glyphicon-${ box.iconType }`;
        const mailLink = `/mails/${ box.mailType }`;
        
        return (
            <Link to={ mailLink }>
                <button className="btn btn-primary btn-block" styleName="mail-box-btn" onClick={ this.handleSetMailType }>
                    <span className={ icon }></span>
                    <span styleName="mail-box-text">{ box.title }</span>
                </button>
            </Link>
        );
    }
}

export default connect(null,
{ setMailType },
null)
(CSSModules(MailFilterBox, styles));