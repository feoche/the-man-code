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
              pour les <small>(vrais)</small> mâles
            </div>
            <div className="buttons">
              <button onClick={() => history.push('/play')}>Jouer</button>
              <button onClick={() => history.push('/scores')}>Meilleurs scores</button>
              <button onClick={() => history.push('/about')}>&Agrave; propos</button>
            </div>
          </div>
        </div>
      </Background>
    );
  }
}
