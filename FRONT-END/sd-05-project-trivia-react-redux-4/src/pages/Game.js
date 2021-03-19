import React, { Component } from 'react';
import GameHeader from '../components/GameHeader';
import GameScreen from '../components/GameScreen';

class Game extends Component {
  render() {
    return (
      <div>
        <GameHeader />
        <GameScreen />
      </div>
    );
  }
}

export default Game;
