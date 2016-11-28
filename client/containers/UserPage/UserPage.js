import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { loadUserById, saveUser } from '../../AC/users';
import UserForm from '../../components/UserForm/UserForm';

class UserPage extends Component {

  componentWillMount() {
    const {params:{userId}, loadUserById} = this.props;
    loadUserById(userId);
  }

  handleSubmit = (formValues) => {
    const { saveUser } = this.props;
    saveUser(formValues);
    history.push(`/users`);
  }

  render() {

    const {user, params:{userId}} = this.props;
    if (!user || (user && userId && user.id != userId))
      return null;

    return (
      <UserForm initialValues={user} onSubmit={ this.handleSubmit }/>
    );
  }
}

export default connect(state => {
    return {
      user: state.users.currentUser
    }
  },
  { 
    loadUserById,
    saveUser
  },
  null,
  {pure: false}
)(UserPage);