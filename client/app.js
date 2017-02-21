import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { install as offlineInstall } from 'offline-plugin/runtime';

render(routes, document.getElementById('app'));

if (process.env.NODE_ENV === 'production') {
  offlineInstall();
}