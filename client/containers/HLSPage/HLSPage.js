import React, { Component } from 'react';
import HLSPlayer from 'react-hls';

class HLSPage extends Component {
  render() {
    const source = 'http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8';
    const customControls = {
      panelBg: '#375a7f',
      buttonBg: 'none',
      buttonColor: '#eee',
      timePadding: '2px 5px',
      playBtnContent: '<span class="glyphicon glyphicon-play"></span>',
      pauseBtnContent: '<span class="glyphicon glyphicon-pause"></span>',
      volumeBtnContent: '<span class="glyphicon glyphicon-volume-up"></span>',
      muteBtnContent: '<span class="glyphicon glyphicon-volume-off"></span>',
      fullScreenBtnContent: '<span class="glyphicon glyphicon-fullscreen"></span>',
      playBackRateContent: '<span class="glyphicon glyphicon-forward"></span>'
    };

    return (
      <div>
        <HLSPlayer source={source} customControls={customControls} />
      </div>
    );
  }
}

export default HLSPage;