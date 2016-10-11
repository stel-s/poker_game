import React, { Component } from 'react';
import './App.css';
import { Game } from './game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Wonderful Poker!</h2>
        </div>
        <div className="Hands" id="ourGame">
          <Game showComputerHand={false} showPlayerHand={true}/>
        </div>
      </div>
    );
  }
}

export default App;
