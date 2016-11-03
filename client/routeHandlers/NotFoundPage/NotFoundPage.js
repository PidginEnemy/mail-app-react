import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './not-found.scss';

const NotFoundPage = (props) => {
    return (
        <div>
            <div styleName="not-found">
                <span styleName="not-found-icon" className="glyphicon glyphicon-alert"></span>
                <h1>Page not found</h1>
            </div>
        </div>
    );
};

export default CSSModules(NotFoundPage, styles);
