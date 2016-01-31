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

  handleAnswerChange(e, letter) {
    this.setState({[`answer${letter}`]: e.target.value});
  }

  handleWinningAnswerChange(e) {
    this.setState({winningAnswer: e.target.value});
  }

  sendMCG() {
    const {
      answerA,
      answerB,
      answerC,
      answerD,
      title,
      situationUrl,
      answerUrl,
      winningAnswer,
    } = this.state;

    if(!(answerA && answerB && answerC && answerD && title && situationUrl && answerUrl && winningAnswer)) {
      alert("You didn't fill everything!");
      return;
    }

    var postsRef = firebaseRoot.child("questions");
    postsRef.push({
      answers: [
        answerA,
        answerB,
        answerC,
        answerD
      ],
      title,
      situationUrl,
      answerUrl,
      winningAnswer: parseInt(winningAnswer) || 0
    });

    alert("Success !");
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
              <input type="text" name="situationUrl" placeholder="Video URL : ID YouTube"
                     onChange={this.handleSituationUrlChange.bind(this)}/>
            </div>
            <div>
              <label>
                Answer video :
              </label>
              <input type="text" name="answerUrl" placeholder="Video URL : ID YouTube"
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
                {['A', 'B', 'C', 'D'].map((letter, i) => (
                  <input type="text" name={`answer${letter}`} placeholder={`Answer ${letter}`}
                         onChange={(e) => this.handleAnswerChange(e, letter)}/>
                ))}
              </div>
            </div>
            <div>
              <label>
                Winning answer :
              </label>
              <select name="winningAnswer" onChange={this.handleWinningAnswerChange.bind(this)}>
                {['A', 'B', 'C', 'D'].map((letter, i) => <option value={i}>{letter}</option>)}
              </select>
            </div>
            <button onClick={this.sendMCG.bind(this)}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}
