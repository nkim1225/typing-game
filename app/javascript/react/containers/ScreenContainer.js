import React, { Component } from 'react';
import GameTile from './../components/GameTile';

class ScreenContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let row;
    let firstEnemy;
    let board = this.props.board.map(row => {
      return row.map(tile => {
        firstEnemy = this.props.targetedEnemy !== null && this.props.targetedEnemy.key === tile.key;
        return (
          <GameTile
            key={tile.key}
            character={tile.value}
            word={tile.word}
            firstEnemy={firstEnemy}
          />
        );
      });
    });
    return (
      <div className="screen-border">
        <div className="nes-container is-rounded is-dark">
          <div className="screen-container">
            {/*<img id="background" src={background} alt="background" />*/}
            <div className="game-row">{board[0]}</div>
            <div className="game-row">{board[1]}</div>
            <div className="game-row">{board[2]}</div>
            <div className="game-row">{board[3]}</div>
            <div className="game-row">{board[4]}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScreenContainer;
