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
    this.findMonster = this.findMonster.bind(this);
    this.killMonster = this.killMonster.bind(this);
  }

  findMonster(row) {
    let monster = null;
    this.state.board[row].forEach(tile => {
      if (tile.value !== GAME_PLAYER && tile.value !== GAME_EMPTY) {
        monster = tile;
      }
    });
    return monster;
  }

  killMonster() {
    let copy = [...this.state.board];
    copy[this.state.playerPosition].forEach(tile => {
      if (tile.value !== GAME_PLAYER && tile.value !== GAME_EMPTY) {
        tile.value = GAME_EMPTY;
      }
    });
    this.setState({ board: copy });
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
    let monster = this.findMonster(this.state.playerPosition);
    let word = ' ';
    if (monster !== null) {
      word = 'TOM';
    }
    return (
      <div className="game-container">
        <h2>Game Container</h2>
        <ScreenContainer board={this.state.board} playerPosition={this.state.playerPosition} />
        <InputContainer word={word} killMonster={this.killMonster} movePlayer={this.movePlayer} />
        <ScoreContainer />
      </div>
    );
  }
}

export default GameContainer;
