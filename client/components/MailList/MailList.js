import React, { PropTypes, Component } from 'react';
import history from '../../history';
import moment from 'moment';
import CSSModules from 'react-css-modules';
import styles from './mail-list.module.scss';
import ScrollArea from 'react-scrollbar';

class MailList extends Component {

  static propTypes = {
    mails: PropTypes.array.isRequired
  };

  handleMailRowClick = (mailId) => {
    const currentLocation = history.getCurrentLocation().pathname;

    history.push(`${ currentLocation }/${ mailId }`);
  }

  render() {

    const { mails } = this.props;

    const mailItems = mails.map((mail) => {

      const mailAttachment = (mail.withAttachments) ? <span className="glyphicon glyphicon-paperclip"></span> : null;
      const mailDate = moment(mail.dtReceived).format('DD.MM.YYYY');

      return (
        <tr styleName="mail-list-row" key={ mail._id } onClick={ () => this.handleMailRowClick(mail._id) }>
          <td><div styleName="mail-icon" className="img-circle"/></td>
          <td>{ mail.name }</td>
          <td>{ mail.subject }</td>
          <td>{ mailAttachment }</td>
          <td>{ mailDate }</td>
        </tr>
      );
    });

    return (
      <ScrollArea styleName="mail-list" speed={ 0.8 }>
        <table className="table table-hover">
          <tbody>
          { mailItems }
          </tbody>
        </table>
      </ScrollArea>
    );
  }
}

export default CSSModules(MailList, styles);