import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { install as offlineInstall } from 'offline-plugin/runtime';
import Push from 'push.js';

render(routes, document.getElementById('app'));

if (process.env.NODE_ENV === 'production') {
  offlineInstall();
}

window.Push = Push; // TODO develop