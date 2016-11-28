import React, {Component}  from 'react';
import {connect} from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';

class UsersListPage extends Component {
  render() {
    return (
      <div>
        <UsersList data={this.props.data}/>
      </div>
    );
  }
}

export default connect(state => {
  return {
    data: state.users.data
  }
})(UsersListPage);