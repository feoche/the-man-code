import React, { Component } from 'react';
import { history } from '../routes';
import firebaseRoot from '../firebaseRoot';

export default class Highscores extends Component {
  constructor() {
    super();
    this.state = {
      rows: {},
      retrieveRows: false
    };
  }

  retrieveScores() {
    var ref = firebaseRoot.child("scores");
    ref.orderByChild("score").on("value", (data) => {
      this.setState({rows: data.val()});
      this.setState({retrieveRows: true});
    });
  }

  componentWillMount() {
    this.retrieveScores();
  }

  render() {
    return (
      <div className="highscores">
        <div className="container">
          <h1>Highscores</h1>
          {this.state.retrieveRows ? '' : (
            <div className="magnum-spinner">
              <img src={require('../../assets/img/seleck.png')} alt=""/>
            </div>
          )}
          <div className="table">
            {Object.keys(this.state.rows).map((key) => (
              <div className="row">
              <span className="column">
                <a href={`https://twitter.com/${this.state.rows[key].username}`}>@{this.state.rows[key].username}</a>
              </span>
              <span className="column">
                {this.state.rows[key].score}
              </span>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button onClick={() => history.push('/')}>Take me back !</button>
          </div>
        </div>
      </div>
    );
  }
}
