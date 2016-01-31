import React, { Component } from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';

import firebaseRoot from '../firebaseRoot';

import ProgressBar from '../components/ProgressBar';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      nextQuestion: false,
      showSolution: false,
      selectedAnswer: null,
      currentQuestionIndex: 0,
      questions: null,
    };
  }

  componentWillMount() {
    firebaseRoot.child('questions').once("value", (data) => {
      this.setState({
        questions: data.val(),
      });
    });
  }

  selectItem(number) {
    this.setState({
      selectedAnswer: number,
    });
  }

  showSolutionVideo() {
    if (this.state.showSolution) {
      this.setState({nextQuestion: true});
    } else {
      this.setState({showSolution: true});
    }
  }

  render() {
    const { currentQuestionIndex, questions, selectedAnswer } = this.state;

    if(!questions) {
      return <div>Loading</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    const answers = currentQuestion.answers.map((answer, i) => {
      const selectedOrSolutionClasses = this.state.showSolution ? {
        'success': i === currentQuestion.winningAnswer,
        'error': selectedAnswer === i && i !== currentQuestion.winningAnswer,
      } : { 'active': selectedAnswer === i };
      const classNames = classnames('item', selectedAnswer !== null ? selectedOrSolutionClasses : false);

      return (
        <span>
          <a onClick={() => this.selectItem(i)} className={classNames}>{answer.label}</a>
        </span>
      );
    });

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

    return (
      <div className="game-main">
        <div className="visual">
          <YouTube
            videoId={this.state.showSolution ? currentQuestion.answerUrl : currentQuestion.situationUrl}
            className="video"
            opts={opts}
            onEnd={this.showSolutionVideo.bind(this)}
            />
        </div>
        <ProgressBar steps={questions.length} current={currentQuestionIndex} />
        <div className="text">
          <div className="question">{currentQuestion.label}</div>
          <div className="answers">
            {this.state.nextQuestion ? <span><a className="item">Next&nbsp;&rarr;</a></span> : answers}
          </div>
        </div>
      </div>
    );
  }
}
