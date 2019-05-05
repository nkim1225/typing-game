import React, { Component } from 'react';
import GameTile from './../components/GameTile';

class ScreenContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let row;
    let board = this.props.board.map(row => {
      return row.map(tile => {
        if (tile.value === 'EMPTY') {
          return <GameTile key={tile.key} character=" - " />;
        } else if (tile.value === 'PLAYER') {
          return <GameTile key={tile.key} character=" + " />;
        } else if (tile.value === 'TOM') {
          return <GameTile key={tile.key} character=" * " />;
        }
      });
    });
    return (
      <div className="screen-container">
        <div className="game-row">{board[0]}</div>
        <div className="game-row">{board[1]}</div>
        <div className="game-row">{board[2]}</div>
        <div className="game-row">{board[3]}</div>
        <div className="game-row">{board[4]}</div>
      </div>
    );
  }
}

export default ScreenContainer;
