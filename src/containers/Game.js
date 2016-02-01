import React, { Component } from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { history } from '../routes';

import firebaseRoot from '../firebaseRoot';

import ProgressBar from '../components/ProgressBar';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      nextQuestion: false,
      showSolution: false,
      selectedAnswer: null,
      currentQuestionIndex: 0,
      questions: null
    };
  }

  componentWillMount() {
    firebaseRoot.child('questions').once("value", (data) => {
      const questions = data.val();
      this.setState({
        questions,
        currentQuestionIndex: Object.keys(questions)[0]
      });
    });
  }

  selectItem(number) {
    this.setState({
      selectedAnswer: number
    });
  }

  showSolutionVideo() {
    if (this.state.showSolution) {
      this.setState({nextQuestion: true});
    } else {
      if (this.state.questions[this.state.currentQuestionIndex].winningAnswer === this.state.selectedAnswer) {
        this.setState({score: this.state.score + 1000});
      }
      this.setState({showSolution: true});
    }
  }

  sendScore(score) {
    var postsRef = firebaseRoot.child("scores") || (firebaseRoot.set({"scores": {}}));
    firebaseRoot.authWithOAuthPopup("twitter", function (error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        // Try unAuthenticated
        firebaseRoot.authAnonymously(function (error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            var username = prompt("Please enter your username", "");
            postsRef.push({
              username: username || "Anonymous",
              score: score
            });
          }
        });
      } else {
        console.log("Authenticated successfully with payload:", authData);
        postsRef.push({
          username: authData.twitter && authData.twitter.username,
          score: score
        });
      }
    });
  }

  nextQuestion() {
    const nextIndex = function (db, key) {
      const keys = Object.keys(db), i = keys.indexOf(key);
      return i !== -1 && keys[i + 1];
    };

    const nextQuestionIndex = nextIndex(this.state.questions, this.state.currentQuestionIndex);
    if (!nextQuestionIndex) {
      this.sendScore(this.state.score);
      history.push('/highscores');
    }

    this.setState({
      nextQuestion: false,
      showSolution: false,
      selectedAnswer: null,
      currentQuestionIndex: nextQuestionIndex
    });
  }

  render() {
    const { currentQuestionIndex, questions, selectedAnswer } = this.state;

    if (!questions) {
      return (
        <div className="game-main">
          <div className="magnum-spinner">
            <div>
              <img src={require('../../assets/img/seleck.png')} alt=""/>

              <p>Loading...</p>
            </div>
          </div>
        </div>
      );
    }

    const currentQuestion = questions[currentQuestionIndex];

    const answers = currentQuestion.answers.map((answer, i) => {
      const selectedOrSolutionClasses = this.state.showSolution ? {
        'success': i === currentQuestion.winningAnswer,
        'error': selectedAnswer === i && i !== currentQuestion.winningAnswer
      } : {'active': selectedAnswer === i};
      const classNames = classnames('item', selectedAnswer !== null ? selectedOrSolutionClasses : false);

      return (
        <span>
          <a onClick={() => this.selectItem(i)} className={classNames}>{answer}</a>
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
        <ProgressBar steps={Object.keys(questions).length}
                     current={Object.keys(questions).indexOf(currentQuestionIndex)}/>

        <div className="text">
          {this.state.nextQuestion ? '': <div className="question">{currentQuestion.title}</div>}
          <div className="answers">
            {this.state.nextQuestion ? <div className="answers"><span><a onClick={this.nextQuestion.bind(this)}
                                                                         className="item">Next&nbsp;&rarr;</a></span>
            </div> : answers}
          </div>
        </div>
      </div>
    );
  }
}
