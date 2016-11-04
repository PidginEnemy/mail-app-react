import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './not-found.module.scss';

const NotFoundPage = (props) => {
    return (
        <div>
            <div styleName="not-found">
                <h1 styleName="not-found-title">Error 404</h1>
                <span styleName="not-found-icon" className="glyphicon glyphicon-alert"></span>
                <h1 styleName="not-found-title">Page not found</h1>
            </div>
        </div>
    );
};

export default CSSModules(NotFoundPage, styles);
