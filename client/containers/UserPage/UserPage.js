import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUserById } from '../../AC/users';
import UserForm from '../../components/UserForm/UserForm';

class UserPage extends Component {
    
    componentWillMount() {
        const { params:{ userId }, loadUserById } = this.props;
        loadUserById(userId);
    }

    handleSubmit = (formValues) => {
        console.log(formValues);
    }
    
    render() {
        
        const { user, params:{ userId } } = this.props;
        if(!user || (user && userId && user.id != userId))
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
    { loadUserById },
    null,
    { pure: false }
)(UserPage);