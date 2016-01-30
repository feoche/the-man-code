import React, { Component } from 'react';

import Background from '../components/Background';
import Title from '../components/Title';

export default class Root extends Component {
  render() {
    return (
      <Background>
        <div className="menu">
          <div className="content">
            <Title></Title>
            <div className="subtitle">
              pour les
              <small>(vrais)</small>
              mâles
            </div>
            <div className="buttons">
              <button>Jouer</button>
              <button>Meilleurs scores</button>
              <button>A propos</button>
            </div>
          </div>
        </div>
      </Background>
    );
  }
}
