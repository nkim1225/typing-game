import React, { Component } from 'react';

class ScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.props.board,
    };
  }

  render() {
    return (
      <div className="screen-container">
        <h2>Screen Container</h2>
      </div>
    );
  }
}

export default ScreenContainer;
