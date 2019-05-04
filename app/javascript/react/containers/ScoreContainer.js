import React, { Component } from 'react';

class ScoreContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: '',
    };
  }

  render() {
    return (
      <div className="score-container">
        <h2>Score Container</h2>
      </div>
    );
  }
}

export default ScoreContainer;
