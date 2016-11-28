import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { loadMailById } from '../../AC/mails';
import Mail from '../../components/Mail/Mail';

class MailPage extends Component {

  static propTypes = {
    params: PropTypes.shape({
      mailId: PropTypes.string.isRequired
    }),
    loadMailById: PropTypes.func,
    mail: PropTypes.object
  };

  componentDidMount() {
    const { params:{ mailId }, loadMailById } = this.props;

    loadMailById(mailId);
  }

  render() {

    const { mail } = this.props;

    if (!mail) return null;

    return (
      <div>
        <Mail mail={ mail }/>
      </div>
    );
  }
}

export default connect(state => {
  return {
    mail: state.mails.currentMail
  };
},
{ loadMailById },
null,
{ pure: false })(MailPage);