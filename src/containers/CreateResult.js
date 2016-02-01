import React, { Component } from 'react';

export default class CreateResult extends Component {
  render() {
    return (
      <div className="create">
        <div className="container">
          <h1>{ statusName }</h1>
          <p>{ statusExplanation }</p>
        </div>
      </div>
    );
  }
}
