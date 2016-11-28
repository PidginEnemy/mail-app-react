import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './user-list.module.scss';
import history from '../../history';
import ScrollArea from 'react-scrollbar';

class UsersList extends Component {

  handleUserRowClick = (userId) => {
    const currentLocation = history.getCurrentLocation().pathname;
    history.push(`${currentLocation}/${userId}`);
  }

  render() {
    const {data} = this.props;

    const usersRows = data.map(user => {
      return (
        <tr key={user.id} styleName="users-list-row" onClick={ () => this.handleUserRowClick(user.id) }>
          <td styleName="users-list-col">
            <img src={user.picture.small} className="img-circle"/>
          </td>
          <td styleName="users-list-col">
            {user.surName} {user.firstName}
          </td>
          <td styleName="users-list-col">
            {user.email}
          </td>
        </tr>
      );
    });

    return (
      <ScrollArea styleName="users-list" speed={0.8}>
        <table className="table table-hover">
          <tbody>
          {usersRows}
          </tbody>
        </table>
      </ScrollArea>
    );
  }
}

export default CSSModules(UsersList, styles);
