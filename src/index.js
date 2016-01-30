import React from 'react';
import { render } from 'react-dom';
import Firebase from 'firebase';

const myRootRef = new Firebase('https://code-de-conduite.firebaseIO.com/');
myRootRef.set("hello world!");

render(
  <p>Minimal project</p>,
  document.getElementById('app')
);
