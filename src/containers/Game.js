import React, { Component } from 'react';

export default class Game extends Component {
  componentWillMount() {
    console.log('fetch data here');
  }

  render() {
    return (
      <div className="game-main">
        <div className="visual">
          <img src="https://static-secure.guim.co.uk/sys-images/Guardian/About/General/2013/11/1/1383329924748/Tom-Selleck-as-Magnum-PI-010.jpg" />
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
            <span><a className="item error">Un beau gosse</a></span>
            <span><a className="item active">Un quetard qui pique des Ferraris</a></span>
            <span><a className="item success">Une moustache avant tout</a></span>
            <span><a className="item">Obi-Wan Kenobi</a></span>
          </div>
        </div>
      </div>
    );
  }
}
