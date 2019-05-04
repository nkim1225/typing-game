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
  }
  handleOnChange(event) {
    this.setState({ input: event.target.value });
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
        />
      </div>
    );
  }
}

export default InputContainer;
