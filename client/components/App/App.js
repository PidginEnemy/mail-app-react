import React, {Component} from 'react';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './app.module.scss';
import {Nav, Navbar, NavItem, MenuItem} from 'react-bootstrap';

class App extends Component {

    static propTypes = {};

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Link to="/" className="navbar-brand">
                            <span className="glyphicon glyphicon-envelope"></span>CatMail
                        </Link>
                        <Navbar.Brand styleName="navbar-logo">
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <div styleName="content">
                    <div className="container">
                        <h1>My React Application!</h1>
                        <span className="glyphicon glyphicon-heart"></span>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(App, styles);