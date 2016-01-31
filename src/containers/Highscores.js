import React, { Component } from 'react';
import { browserHistory as history } from 'react-router';

export default class Highscores extends Component {
  constructor() {
    super();
    this.state = {
      rows: {}
    };
  }

  retrieveScores() {
    var ref = new Firebase("https://code-de-conduite.firebaseIO.com/scores");
    ref.on("value", (data) => {
      this.setState({rows: data.val()});
    });
  }

  componentWillMount() {
    this.retrieveScores();
  }

  render() {
    const username = 'Flavien de la Vega';
    const score = '999999999999';
    return (
      <div className="highscores">
        <div className="container">
          <h1>Highscores</h1>
          <div className="table">
            {Object.keys(this.state.rows).map((key) => (
              <div className="row">
              <span className="column">
                {key}
              </span>
              <span className="column">
                {this.state.rows[key]}
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
