import React, { Component } from 'react';

class UsersRoot extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default UsersRoot;