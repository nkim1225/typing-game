import React from 'react';

let PlayerTile = props => {
  return (
    <div className="player-info">
      <dd>
        <dl>{props.rank}</dl>
        <dl>{props.username}</dl>
        <dl>{props.score}</dl>
      </dd>
    </div>
  );
};
export default PlayerTile;
