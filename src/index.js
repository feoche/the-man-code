import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Root from './containers/Root';
import Home from './containers/Home';
import About from './containers/About';
import Game from './containers/Game';
import Create from './containers/Create';
import CreateResult from './containers/CreateResult';

import style from '../scss/main.scss';

const routes = {
  path: '/',
  component: Root,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'play', component: Game },
    { path: 'create', component: Create },
    { path: 'create-result', component: CreateResult },
    // { path: 'scores', component: Scores },
    { path: 'about', component: About },
  ],
};

render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('app')
);
