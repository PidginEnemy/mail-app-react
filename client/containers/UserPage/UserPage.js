import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUserById } from '../../AC/users';
import UserForm from '../../components/UserForm/UserForm';

class UserPage extends Component {
    
    componentDidMount() {
        const { params:{ userId }, loadUserById } = this.props;
        loadUserById(userId);
    }
    
    render() {
        
        const { user } = this.props;
        if(!user)
            return null;
        
        return (
            <UserForm user={user}/>
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