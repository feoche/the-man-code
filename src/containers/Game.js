import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      nextQuestion: false,
      showSolution: false,
      situationUrl: 'U6HvY9GPApk',
      answerUrl: '2g811Eo7K8U'
    }
  }

  componentWillMount() {
    console.log('fetch data here');
  }

  showSolutionVideo() {
    if (this.state.showSolution) {
      this.setState({nextQuestion: true});
    } else {
      this.setState({showSolution: true});
    }
  }

  render() {
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autohide: 1,
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        theme: 'dark'
      }
    };
    const buttons = (
      <div>
        <span><a className="item error">Un beau gosse</a></span>
        <span><a className="item active">Un quetard qui pique des Ferraris</a></span>
        <span><a className="item success">Une moustache avant tout</a></span>
        <span><a className="item">Obi-Wan Kenobi</a></span>
      </div>
    );
    return (
      <div className="game-main">
        <div className="visual">
          <YouTube
            videoId={this.state.showSolution? this.state.answerUrl : this.state.situationUrl}
            className="video"
            opts={opts}
            onEnd={this.showSolutionVideo.bind(this)}
            />
        </div>
        <ul className="progress-bar">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="active"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="text">
          <div className="question">
            Je suis Tom Selleck, que suis-je vraiment?
          </div>
          <div className="answers">
            {this.state.nextQuestion ? <span><a className="item">Next&nbsp;&rarr;</a></span> : buttons}
          </div>
        </div>
      </div>
    );
  }
}
