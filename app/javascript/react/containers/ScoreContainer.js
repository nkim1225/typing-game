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
        <div className="nes-container with-title is-centered">
          <p className="title">Score Container</p>
          <div className="start-button">
            <button className="nes-btn" onClick={this.props.start}>
              Start
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreContainer;
