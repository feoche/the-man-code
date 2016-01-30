import React from 'react';
import { render } from 'react-dom';
import Firebase from 'firebase';

import Root from './containers/Root';

import style from '../scss/main.scss';

const myRootRef = new Firebase('https://code-de-conduite.firebaseIO.com/');
myRootRef.set("hello world!");

render(
  <Root />,
  document.getElementById('app')
);
