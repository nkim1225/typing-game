import React, { Component } from 'react';

class GameTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: '',
    };
  }

  render() {
    return (
      <div className="game-tile">
        <h4>{this.props.character}</h4>
      </div>
    );
  }
}

export default GameTile;
