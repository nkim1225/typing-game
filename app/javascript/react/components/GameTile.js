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
    let wordBubble = '';
    if (this.props.firstEnemy) {
      wordBubble = (
        <div className="wordBubble">
          <div className="nes-balloon from-left">
            <p>{this.props.word}</p>
          </div>
        </div>
      );
    }
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
          <img className="enemy" src={zombie} alt="enemy" />
          {wordBubble}
        </div>
      );
    }
  }
}

export default GameTile;
