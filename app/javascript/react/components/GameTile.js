import React, { Component } from 'react';

class GameTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: '',
    };
  }

  render() {
    return <div className="game-tile">{this.props.character}</div>;
  }
}

export default GameTile;
