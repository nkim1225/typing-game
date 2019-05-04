import React, { Component } from 'react';
import ScreenContainer from './ScreenContainer';
import InputContainer from './InputContainer';
import ScoreContainer from './ScoreContainer';
import { emptyBoard } from './../helpers/helper';
class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: emptyBoard(),
    };
  }

  render() {
    return (
      <div className="game-container">
        <h2>Game Container</h2>
        <ScreenContainer board={this.state.board} />
        <InputContainer />
        <ScoreContainer />
      </div>
    );
  }
}

export default GameContainer;
