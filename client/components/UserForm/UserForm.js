import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import history from '../../history';
import CSSModules from 'react-css-modules';
import styles from './user-form.module.scss';

class UserForm extends Component {

  render() {

    const {initialValues, handleSubmit} = this.props;

    return (
      <div className="row">
        <div className="col-xs-12 col-md-6 center-block" styleName="user-form">
          <h2 className="text-center">User's data</h2>
          <form onSubmit={ handleSubmit }>
            <div className="form-group text-center">
              <img src={initialValues.picture.medium} className="img-circle"/>
            </div>
            <div className="form-group">
              <label htmlFor="surName">Surname</label>
              <Field className="form-control" name="surName" component="input" type="text"/>
            </div>
            <div className="form-group">
              <label>Firstname</label>
              <Field className="form-control" name="firstName" component="input" type="text"/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <Field className="form-control" name="email" component="input" type="email"/>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <Field className="form-control" name="phone" component="input" type="text"/>
            </div>
            <button className="btn btn-primary" styleName="user-form-saveBtn" type="submit">Save</button>
            <a className="btn btn-default" title="Back to user list" onClick={ () => history.goBack() }>Cancel</a>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'user'
})(CSSModules(UserForm, styles));
