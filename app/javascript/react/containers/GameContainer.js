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
      time: 0,
      level: 1,
      currentEnemies: [],
      nextEnemies: [],
    };
    this.movePlayer = this.movePlayer.bind(this);
    this.findMonsters = this.findMonsters.bind(this);
    this.killMonster = this.killMonster.bind(this);
    this.advanceMonsters = this.advanceMonsters.bind(this);
    this.start = this.start.bind(this);
    this.fetchLevel = this.fetchLevel.bind(this);
    this.spawnEnemy = this.spawnEnemy.bind(this);
  }
  spawnEnemy() {
    let randomRow = Math.floor(Math.random() * 5);
    let rowCopy = [...this.state.currentEnemies];
    let boardCopy = [...this.state.board];
    let enemy = rowCopy.pop();
  }
  fetchLevel(level) {
    fetch(`/api/v1/levels/${level}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ currentEnemies: body.enemies });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  start() {
    this.fetchLevel(1);
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
      if (this.state.time !== 0 && this.state.time % 2 === 0) {
        this.advanceMonsters();
        this.spawnEnemy();
      }
    }, 1000);
    this.setState({ started: true });
  }

  findMonsters(row) {
    let monsters = [];
    this.state.board[row].forEach((tile, index) => {
      if (tile.name !== GAME_PLAYER && tile.name !== GAME_EMPTY) {
        monsters.push({ tile: tile, index: index });
      }
    });
    return monsters;
  }

  advanceMonsters() {
    let copy = [...this.state.board];
    let monsters;
    for (let i = 0; i < 5; i++) {
      monsters = this.findMonsters(i);
      monsters.forEach(element => {
        if (element !== null && element.index < 7) {
          copy[i][element.index] = {
            key: copy[i][element.index].key,
            name: GAME_EMPTY,
            value: '-',
            word: '',
          };
          element.tile.key = copy[i][element.index + 1].key;
          copy[i][element.index + 1] = element.tile;
        }
      });
    }
    this.setState({ board: copy });
  }

  killMonster() {
    let copy = [...this.state.board];
    let monsters = this.findMonsters(this.state.playerPosition);
    let monster = monsters[monsters.length - 1];
    copy[this.state.playerPosition][monster.index] = {
      name: GAME_EMPTY,
      value: '-',
      word: '',
      key: copy[this.state.playerPosition][monster.index].key,
    };
    this.setState({ board: copy });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  movePlayer(value) {
    let copy = [...this.state.board];
    let playerPosition = this.state.playerPosition;
    if (value === 'UP' && playerPosition !== 0) {
      copy[playerPosition][7] = {
        key: copy[playerPosition][7].key,
        name: GAME_EMPTY,
        value: '-',
        word: '',
      };
      copy[playerPosition - 1][7] = {
        key: copy[playerPosition - 1][7],
        word: '',
        name: GAME_PLAYER,
        value: '[+]',
      };
      this.setState({ board: copy, playerPosition: playerPosition - 1 });
    } else if (value === 'DOWN' && this.state.playerPosition !== 4) {
      copy[playerPosition][7] = {
        key: copy[playerPosition][7].key,
        name: GAME_EMPTY,
        value: '-',
        word: '',
      };
      copy[playerPosition + 1][7] = {
        key: copy[playerPosition - 1][7],
        word: '',
        name: GAME_PLAYER,
        value: '[+]',
      };
      this.setState({ board: copy, playerPosition: playerPosition + 1 });
    }
  }
  render() {
    let word = '';
    let monsters = this.findMonsters(this.state.playerPosition);
    if (monsters.length !== 0) {
      word = monsters[monsters.length - 1].tile.word;
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
