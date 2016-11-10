import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './user-form.module.scss';

class UserForm extends Component {

    render() {
        
        const { user } = this.props;
        
        return (
            <div className="row">
                <div className="col-xs-12 col-md-6 center-block" styleName="user-form">
                    <h2 className="text-center">User's data</h2>
                    <form>
                        <div className="form-group text-center">
                            <img src={user.picture.medium} className="img-circle"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CSSModules(UserForm, styles);
