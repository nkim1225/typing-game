import React, { Component } from 'react';
import PlayerTile from './../components/PlayerTile';

class LeaderBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }
  render() {
    let rank = 0;
    let topTen = this.props.players.map(player => {
      rank++;
      return (
        <PlayerTile
          key={player.id + 'leaderBoard'}
          rank={rank}
          username={player.username}
          score={player.score}
        />
      );
    });
    topTen.unshift(
      <div className="leader-board-header" key="header">
        <PlayerTile key={'header'} rank={'Rank'} username={'Name'} score={'Score'} />
      </div>,
    );
    return <div>{topTen}</div>;
  }
}
export default LeaderBoardContainer;
