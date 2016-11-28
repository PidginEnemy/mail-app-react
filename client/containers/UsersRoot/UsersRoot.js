import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadUsers} from '../../AC/users';
import Loader from '../../components/Loader/Loader';

class UsersRoot extends Component {

  componentDidMount() {
    const {loading, loadUsers} = this.props;
    if (!loading)
      loadUsers();
  }

  render() {

    const {loading} = this.props;
    if (loading)
      return <Loader/>;

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(state => state.users,
  {loadUsers},
  null,
  {pure: false})
(UsersRoot);