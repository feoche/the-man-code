import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { routes, history } from './routes';

import style from '../scss/main.scss';

render(
  <Router routes={routes} history={history} />,
  document.getElementById('app')
);
