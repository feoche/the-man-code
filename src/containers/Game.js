import React, { Component } from 'react';

export default class Game extends Component {
  componentWillMount() {
    console.log('fetch data here');
  }

  render() {
    return (
      <div>Game here</div>
    );
  }
}
