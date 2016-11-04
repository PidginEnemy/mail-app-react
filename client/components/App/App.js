import React, {Component} from 'react';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import CSSModules from 'react-css-modules';
import styles from './app.module.scss';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class App extends Component {

    static propTypes = {};

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand styleName="navbar-logo">
                            <Link to="/">
                                <span className="glyphicon glyphicon-envelope"></span>
                                <span styleName="navbar-brand">ReactMail</span>
                            </Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to="/mails">
                            <NavItem>Mails</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/users">
                            <NavItem>Users</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
                <div styleName="content">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(App, styles);