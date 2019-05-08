import React, { Component } from 'react';
import zombie from './../../../assets/images/zombie.gif';
import mainCharacter from './../../../assets/images/1111.gif';

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
          {/*<div className="in-tile">{this.props.character}</div>*/}
          <img id="player" src={mainCharacter} alt="mainCharacter" />
        </div>
      );
    }
    if (this.props.character === '-') {
      return <div className="game-tile">{/*<div className="in-tile">-</div>*/}-</div>;
    } else {
      return (
        <div className="game-tile">
          {/*<div className="in-tile">*/}
          <img src={zombie} alt="enemy" />
          {/*</div>*/}
        </div>
      );
    }
  }
}

export default GameTile;
