import React, {Component} from 'react';
import {connect} from 'react-redux';
import MailList from '../../components/MailList/MailList';

class MailsListPage extends Component {
  render() {
    return (
      <div>
        <MailList mails={this.props.data}/>
      </div>
    );
  }
}

export default connect((state, props) => {
    const {data} = state.mails;
    const currentMailType = props.params.mailBox;
    const filteredMails = data.filter((item) => {
      return item.mailBoxType == currentMailType;
    });
    return {
      data: filteredMails
    };
  },
  null,
  null,
  {pure: false})(MailsListPage);