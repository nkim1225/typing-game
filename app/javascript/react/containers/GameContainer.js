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
      life: true,
    };
    this.movePlayer = this.movePlayer.bind(this);
    this.findMonsters = this.findMonsters.bind(this);
    this.killMonster = this.killMonster.bind(this);
    this.advanceMonsters = this.advanceMonsters.bind(this);
    this.start = this.start.bind(this);
    this.fetchLevel = this.fetchLevel.bind(this);
    this.spawnEnemy = this.spawnEnemy.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.allClear = this.allClear.bind(this);
  }
  allClear() {
    let output = true;
    for (let i = 0; i < this.state.board.length - 1; i++) {
      if (this.findMonsters(i).length !== 0) {
        output = false;
      }
    }
    return output;
  }
  gameOver(input) {
    clearInterval(this.interval);
    if (input) {
      alert('LEVEL DONE');
      this.setState({ started: false });
    } else {
      alert('GAME OVER');
      this.setState({ life: false });
    }
  }
  spawnEnemy(board) {
    let randomRow = Math.floor(Math.random() * 5);
    let spawnList = [...this.state.currentEnemies];
    if (spawnList.length !== 0) {
      let enemy = spawnList.shift();
      this.setState({ currentEnemies: spawnList });
      let currentKey = board[randomRow][0].key;
      board[randomRow][0] = enemy;
      board[randomRow][0].key = currentKey;
    } else if (spawnList.length === 0 && this.allClear()) {
      this.gameOver(true);
      this.setState({ level: this.state.level + 1 });
    }
    return board;
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
        let randomWords = require('random-words');
        body = body.map(enemy => {
          enemy.word = randomWords();
          return enemy;
        });
        this.setState({ currentEnemies: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  start() {
    document.getElementsByName('input')[0].focus();
    this.fetchLevel(this.state.level);
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
      if (this.state.time !== 0 && this.state.time % 2 === 0) {
        this.advanceMonsters();
      }
    }, 1000);
    this.setState({ started: true });
  }

  findMonsters(row) {
    let monsters = [];
    let copyRow = [...this.state.board[row]];
    copyRow.forEach((tile, index) => {
      if (tile.name !== GAME_PLAYER && tile.name !== GAME_EMPTY) {
        monsters.push({ tile: tile, index: index });
      }
    });
    return monsters;
  }

  advanceMonsters() {
    let copy = [...this.state.board];
    let monsters;
    let element;
    for (let i = 0; i < 5; i++) {
      monsters = this.findMonsters(i);
      if (monsters.length !== 0) {
        monsters.reverse();
        monsters.forEach(item => {
          if (item.index < 7) {
            let currentKey = copy[i][item.index].key;
            let nextKey = copy[i][item.index + 1].key;
            item.tile.key = nextKey;
            copy[i][item.index] = {
              name: GAME_EMPTY,
              value: '-',
              key: currentKey,
              word: '',
            };
            copy[i][item.index + 1] = item.tile;
          } else if (item.index >= 7) {
            this.gameOver(false);
          }
        });
      }
    }
    this.setState({ board: this.spawnEnemy(copy) });
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
    if (value === 'UP' && playerPosition !== 0 && copy[playerPosition - 1][7].name !== GAME_TOM) {
      copy[playerPosition][7] = {
        key: copy[playerPosition][7].key,
        name: GAME_EMPTY,
        value: '-',
        word: '',
      };
      copy[playerPosition - 1][7] = {
        key: copy[playerPosition - 1][7].key,
        word: '',
        name: GAME_PLAYER,
        value: '[+]',
      };
      this.setState({ board: copy, playerPosition: playerPosition - 1 });
    } else if (value === 'DOWN') {
      copy[playerPosition][7] = {
        key: copy[playerPosition][7].key,
        name: GAME_EMPTY,
        value: '-',
        word: '',
      };
      if (this.state.playerPosition !== 4 && copy[playerPosition + 1][7].name !== GAME_TOM) {
        copy[playerPosition + 1][7] = {
          key: copy[playerPosition + 1][7].key,
          word: '',
          name: GAME_PLAYER,
          value: '[+]',
        };
        this.setState({ board: copy, playerPosition: playerPosition + 1 });
      } else {
        copy[0][7] = {
          key: copy[0][7].key,
          word: '',
          name: GAME_PLAYER,
          value: '[+]',
        };
        this.setState({ board: copy, playerPosition: 0 });
      }
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
          life={this.state.life}
        />
        <ScoreContainer start={this.start} />
      </div>
    );
  }
}

export default GameContainer;
