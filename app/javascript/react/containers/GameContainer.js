import React, { Component } from 'react';
import ScreenContainer from './ScreenContainer';
import InputContainer from './InputContainer';
import ScoreContainer from './ScoreContainer';
import { emptyBoard, GAME_EMPTY, GAME_PLAYER, GAME_TOM } from './../helpers/helper';
class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: emptyBoard(),
      playerPosition: 2,
    };
    this.movePlayer = this.movePlayer.bind(this);
  }

  movePlayer(value) {
    let copy = [...this.state.board];
    let playerPosition = this.state.playerPosition;
    if (value === 'UP' && playerPosition !== 0) {
      copy[playerPosition][7].value = GAME_EMPTY;
      copy[playerPosition - 1][7].value = GAME_PLAYER;
      this.setState({ board: copy, playerPosition: playerPosition - 1 });
    } else if (value === 'DOWN' && this.state.playerPosition !== 4) {
      copy[playerPosition][7].value = GAME_EMPTY;
      copy[playerPosition + 1][7].value = GAME_PLAYER;
      this.setState({ board: copy, playerPosition: playerPosition + 1 });
    }
  }
  render() {
    return (
      <div className="game-container">
        <h2>Game Container</h2>
        <ScreenContainer board={this.state.board} playerPosition={this.state.playerPosition} />
        <InputContainer movePlayer={this.movePlayer} />
        <ScoreContainer />
      </div>
    );
  }
}

export default GameContainer;
