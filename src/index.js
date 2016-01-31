import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Firebase from 'firebase';

import Root from './containers/Root';
import Home from './containers/Home';
import About from './containers/About';
import Game from './containers/Game';
import Create from './containers/Create';
import CreateResult from './containers/CreateResult';

import style from '../scss/main.scss';

const myRootRef = new Firebase('https://code-de-conduite.firebaseIO.com/');
// myRootRef.authWithOAuthPopup("twitter", function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//   }
// });

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
