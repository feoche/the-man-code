import React, { Component } from 'react';
import { browserHistory as history } from 'react-router';
import firebaseRoot from '../firebaseRoot';

export default class Create extends Component {
  handleSituationUrlChange(e) {
    this.setState({situationUrl: e.target.value});
  }

  handleAnswerUrlChange(e) {
    this.setState({answerUrl: e.target.value});
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }

  handleAnswerAChange(e) {
    this.setState({answerA: e.target.value});
  }

  handleAnswerBChange(e) {
    this.setState({answerB: e.target.value});
  }

  handleAnswerCChange(e) {
    this.setState({answerC: e.target.value});
  }

  handleAnswerDChange(e) {
    this.setState({answerD: e.target.value});
  }

  handleWinningAnswerChange(e) {
    this.setState({winningAnswer: e.target.value});
  }

  sendMCG() {
    var postsRef = firebaseRoot.child("questions");
    postsRef.push({
      answers: [
        this.state.answerA,
        this.state.answerB,
        this.state.answerC,
        this.state.answerD
      ],
      title: this.state.title,
      situationUrl: this.state.situationUrl,
      answerUrl: this.state.answerUrl,
      winningAnswer: parseInt(this.state.winningAnswer) || 0
    });
  }

  render() {
    return (
      <div className="create">
        <div className="container">
          <h1>Create your MCG<br/>
            <small>(&nbsp;Man Code Generator&nbsp;)</small>
          </h1>
          <div className="form">
            <div>
              <label>
                Situation video :
              </label>
              <input type="text" name="situationUrl" placeholder="Video URL (YouTube for instance)"
                     onChange={this.handleSituationUrlChange.bind(this)}/>
            </div>
            <div>
              <label>
                Answer video :
              </label>
              <input type="text" name="answerUrl" placeholder="Video URL (YouTube for instance)"
                     onChange={this.handleAnswerUrlChange.bind(this)}/>
            </div>
            <div>
              <label>
                Question :
              </label>
              <input type="text" name="title" placeholder="Title of the question"
                     onChange={this.handleTitleChange.bind(this)}/>
            </div>
            <div>
              <label>
                Choices :
              </label>

              <div>
                <input type="text" name="answerA" placeholder="Answer A"
                       onChange={this.handleAnswerAChange.bind(this)}/>
                <input type="text" name="answerB" placeholder="Answer B"
                       onChange={this.handleAnswerBChange.bind(this)}/>
                <input type="text" name="answerC" placeholder="Answer C"
                       onChange={this.handleAnswerCChange.bind(this)}/>
                <input type="text" name="answerD" placeholder="Answer D"
                       onChange={this.handleAnswerDChange.bind(this)}/>
              </div>
            </div>
            <div>
              <label>
                Winning answer :
              </label>
              <select name="winningAnswer" onChange={this.handleWinningAnswerChange.bind(this)}>
                <option value="0">A</option>
                <option value="1">B</option>
                <option value="2">C</option>
                <option value="3">D</option>
              </select>
            </div>
            <button onClick={this.sendMCG.bind(this)}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}
