import React, { Component } from 'react';
import TextField from './../components/TextField';

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      word: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleOnChange(event) {
    let subString = event.target.value;
    if (this.props.started && this.props.word.substring(0, subString.length) === subString) {
      if (event.target.value === this.props.word) {
        this.setState({ input: '' });
        this.props.killMonster();
      } else {
        this.setState({ input: event.target.value, word: this.props.word });
      }
    }
  }
  handleKeyDown(event) {
    if (this.props.started && this.props.life) {
      if (event.keyCode === 38) {
        this.props.movePlayer('UP');
        this.setState({ input: '' });
      } else if (event.keyCode === 40 || event.keyCode === 13) {
        this.props.movePlayer('DOWN');
        this.setState({ input: '' });
      }
    }
  }

  render() {
    return (
      <div className="input-container">
        <TextField
          className="nes-input"
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
