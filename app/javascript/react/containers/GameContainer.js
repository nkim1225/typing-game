import React, { Component } from 'react';
import ScreenContainer from './ScreenContainer';
import InputContainer from './InputContainer';
import ScoreContainer from './ScoreContainer';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
    };
  }

  render() {
    return (
      <div className="game-container">
        <h2>Game Container</h2>
        <ScreenContainer />
        <InputContainer />
        <ScoreContainer />
      </div>
    );
  }
}

export default GameContainer;
