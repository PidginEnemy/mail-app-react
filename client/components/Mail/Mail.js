import React, { PropTypes, Component } from 'react';
import history from '../../history';
import moment from 'moment';
import CSSModules from 'react-css-modules';
import styles from './mail.module.scss';

class Mail extends Component {

  static propTypes = {
    mail: PropTypes.object.isRequired
  };

  render() {

    const { mail: { guid, dtReceived, withAttachments, picture, email, name, text } } = this.props;
    const mailDate = moment(dtReceived).format('DD.MM.YYYY');
    const mailAttachmentUrl = `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&guid=${ guid }`;
    const mailAttachment = (withAttachments) ?
      <div><strong>Attachment:</strong><br/><img src={ mailAttachmentUrl }/></div> : null;

    return (
      <div>
        <div className="col-xs-12">
          <div className="pull-left">
            <img className="img-circle" styleName="avatar" src={ picture }/>
            <strong>{ name }</strong>
            <p>{ email }</p>
            <p>{ mailDate }</p>
          </div>
          <div className="pull-right">
            <button className="btn btn-primary" onClick={ () => history.goBack() }>
              <span className="glyphicon glyphicon-arrow-left"></span>
            </button>
          </div>
        </div>
        <div className="col-xs-12">
          <p>{ text }</p>
          { mailAttachment }
        </div>
      </div>
    );
  }
}

export default CSSModules(Mail, styles);