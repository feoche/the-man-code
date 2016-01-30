import React, { Component } from 'react';
import { browserHistory as history } from 'react-router';

import Background from '../components/Background';
import Title from '../components/Title';

export default class About extends Component {
  render() {
    return (
      <Background>
        <div className="menu">
          <div className="content">
            <Title />
            <div className="subtitle">
              pour les
              <small>(vrais)</small>
              mâles
            </div>
            <div>About content here</div>
            <div className="buttons">
              <button onClick={history.push('/')}>Take me back !</button>
            </div>
          </div>
        </div>
      </Background>
    );
  }
}
