import React, { Component } from 'react';
import TextField from './../components/TextField';

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      solution: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleOnChange(event) {
    this.setState({ input: event.target.value });
  }
  handleKeyDown(event) {
    if (event.keyCode === 38) {
      this.props.movePlayer('UP');
      this.setState({ input: '' });
    } else if (event.keyCode === 40) {
      this.props.movePlayer('DOWN');
      this.setState({ input: '' });
    }
  }
  render() {
    console.log(this.state.input);
    return (
      <div className="input-container">
        <h2>Input Container</h2>
        <TextField
          lableName="input"
          inputName="input"
          value={this.state.input}
          handleOnChange={this.handleOnChange}
          handleKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default InputContainer;