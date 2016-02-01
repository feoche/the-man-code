import React, { Component } from 'react';
import { Link } from 'react-router';
import { history } from '../routes';
import Sound from 'react-sound';
import Background from '../components/Background';
import Title from '../components/Title';


export default class Home extends Component {
  render() {
    return (
      <Background>
        <div className="container">
          <Title />
          <div className="buttons">
            <button onClick={() => history.push('/play')}>Play</button>
            <button onClick={() => history.push('/create')}>Create</button>
            <button onClick={() => history.push('/highscores')}><span>Highscores</span></button>
            <button onClick={() => history.push('/about')}><span>About</span></button>
          </div>
        </div>
        <Sound
          url={require('../../assets/sound/main_theme.mp3')}
          playStatus={Sound.status.PLAYING} />
      </Background>
    );
  }
}
