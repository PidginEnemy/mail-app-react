import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './loader.module.scss';

const Loader = (props) => {
    return (
        <div styleName="loader"></div>
    );
};

export default CSSModules(Loader, styles);
