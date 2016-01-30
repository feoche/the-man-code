import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory as history } from 'react-router';

import Background from '../components/Background';
import Title from '../components/Title';

export default class Home extends Component {
  render() {
    return (
      <Background>
        <div className="menu">
          <div className="content">
            <Title />
            <div className="subtitle">
              for <small>(tough)</small> males
            </div>
            <div className="buttons">
              <button onClick={() => history.push('/play')}>Play</button>
              <button onClick={() => history.push('/scores')}>Highscores</button>
              <button onClick={() => history.push('/about')}>About</button>
            </div>
          </div>
        </div>
      </Background>
    );
  }
}
