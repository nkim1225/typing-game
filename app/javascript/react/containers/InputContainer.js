import React, { Component } from 'react';

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
    };
  }

  render() {
    return (
      <div className="input-container">
        <h2>Input Container</h2>
      </div>
    );
  }
}

export default InputContainer;
