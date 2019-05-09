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
        <div className="nes-container is-rounded is-centered is-dark with-title">
          <p className="title">Score Container</p>
          <div className="score-tile-container">
            <div className="score-board">
              <p>Score: {this.props.score}</p>
            </div>
            <div className="start-button">
              <button className="nes-btn" onClick={this.props.start}>
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreContainer;
