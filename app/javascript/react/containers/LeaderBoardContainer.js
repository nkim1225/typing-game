import React, { Component } from 'react';
import PlayerTile from './../components/PlayerTile';

class LeaderBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
    this.fetchUsers = this.fetchUsers.bind(this);
  }
  fetchUsers() {
    fetch(`/api/v1/users`)
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
        this.setState({ players: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    let rank = 0;
    let topTen = this.state.players.map(player => {
      rank++;
      return (
        <PlayerTile
          key={player.id}
          rank={rank}
          username={player.username}
          score={player.score}
          date={player.date}
        />
      );
    });
    topTen.unshift(<div className="leader-board-header"><PlayerTile key={'-1'} rank={'Rank'} username={'Name'} score={'Score'} /></div>);
    return <div>{topTen}</div>;
  }
}
export default LeaderBoardContainer;
