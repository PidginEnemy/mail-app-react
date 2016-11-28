import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import MailList from '../../components/MailList/MailList';

class MailsListPage extends Component {
  
  static propTypes = {
    data: PropTypes.array.isRequired,
    params: PropTypes.shape({
      mailBox: PropTypes.string.isRequired
    })
  };
  
  render() {
    
    const { data } = this.props;
    
    return (
      <div>
        <MailList mails={ data }/>
      </div>
    );
  }
}

export default connect((state, props) => {
  const { data } = state.mails;
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
{ pure: false })(MailsListPage);