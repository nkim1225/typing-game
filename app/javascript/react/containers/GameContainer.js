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
      started: false,
    };
    this.movePlayer = this.movePlayer.bind(this);
    this.findMonster = this.findMonster.bind(this);
    this.killMonster = this.killMonster.bind(this);
    this.advanceMonsters = this.advanceMonsters.bind(this);
    this.start = this.start.bind(this);
  }
  start() {
    this.interval = setInterval(() => this.advanceMonsters(), 3000);
    this.setState({ started: true });
  }

  findMonster(row) {
    let monster = { monster: null, index: 8 };
    this.state.board[row].forEach((tile, index) => {
      if (tile.value !== GAME_PLAYER && tile.value !== GAME_EMPTY) {
        monster = { monster: tile, index: index };
      }
    });
    return monster;
  }

  advanceMonsters() {
    let copy = [...this.state.board];
    let monster;
    for (let i = 0; i < 5; i++) {
      monster = this.findMonster(i);
      if (monster.monster !== null && monster.index < 7) {
        copy[i][monster.index].value = GAME_EMPTY;
        copy[i][monster.index + 1].value = GAME_TOM;
      }
    }
    this.setState({ board: copy });
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

  componentWillUnmount() {
    clearInterval(this.interval);
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
    if (monster.monster !== null) {
      word = 'TOM';
    }
    return (
      <div className="game-container">
        <h2>Game Container</h2>
        <ScreenContainer board={this.state.board} playerPosition={this.state.playerPosition} />
        <InputContainer
          word={word}
          killMonster={this.killMonster}
          movePlayer={this.movePlayer}
          started={this.state.started}
        />
        <ScoreContainer start={this.start} />
      </div>
    );
  }
}

export default GameContainer;
