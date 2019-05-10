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
    return <dd>
      <dl><PlayerTile /></dl>
      <dl><PlayerTile /></dl>
      <dl><PlayerTile /></dl>
      <dl><PlayerTile /></dl>
    </dd>;
  }
}
export default LeaderBoardContainer;
