import React, { Component } from 'react';
import ground from './ground.PNG';

class GameTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: '',
    };
  }

  render() {
    if (this.props.character === '[+]') {
      return (
        <div className="game-tile">
          <div className="in-tile">{this.props.character}</div>
        </div>
      );
    }
    if (this.props.character === '-') {
      return (
        <div className="game-tile">
          <div className="in-tile">-</div>
        </div>
      );
    } else {
      return (
        <div className="game-tile">
          <div className="zombie">
            <img src={this.props.character} alt="zombie" />
          </div>
        </div>
      );
    }
  }
}

export default GameTile;
