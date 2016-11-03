// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/styles.scss';
// JS
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';

render(routes, document.getElementById('app'));